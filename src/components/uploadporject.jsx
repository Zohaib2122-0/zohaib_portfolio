



import { useState } from "react";
import { useUploadprojectMutation } from "./redux/projectapislice";
import { Link } from "react-router-dom";
const BankTransactionconfirmation = () => {

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    project: null,
  });

  // API mutation hook
  const [uploadproject, { isLoading, isSuccess, isError, error }] = useUploadprojectMutation();



  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  
  const categories = [
    "Web design",
    "Advertising design",
    "Branding",
    "Packaging design",
    "Banners",
    "Business card design",
    "Brochures",
    "thumbnail",
    "uiux",
    "logo design"]


  // Handle file input change
  const handleFileChange = (e) => {
    const selectedimage = e.target.files[0];
    if (selectedimage && selectedimage.size <= 10 * 1024 * 1024) {
      setFormData((prev) => ({
        ...prev,
        project: selectedimage,
      }));
    } else {
      alert("File size must be max 10 MB");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const submitData = new FormData();

    submitData.append("category", formData.category);
    submitData.append("title", formData.title);
    if (formData.project) {
      submitData.append("project", formData.project);
    } else {
      console.log("formdata is not a file");
    }

    try {
      console.log("=======", formData)
      await uploadproject(submitData).unwrap();
      // Reset form on success if needed

      if (isSuccess) {
        setFormData({
          category: "",
          title: "",
          project: null,
        });
      }
    } catch (err) {
      console.error("Failed to submit transaction:", err);
    }
  };


  return (
  
    <div>
      <div className="">
      
        <div className="w-full lg:w-full px-3  bg-darkbg py-16 ">
            <Link to={"/portfolio/projects"}>
        <button
          type="submit"
          disabled={isLoading}
          className={"bg-darkbg border-2 border-gray-700 text-white px-6 h-12 w-32 rounded-lg"}
          >
          Projects
        </button>
          </Link>
          <form
            onSubmit={handleSubmit}
            className=" w-full max-w-md mx-auto p-10 border-2 border-gray-700 bg-[#1f1f1f] rounded-xl"
          >

            <h2 className="text-white text-xl font-semibold mb-6">
              Upload project
            </h2>
            {/* Success message */}
            {isSuccess && (
              <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Transaction submitted successfully!
              </div>
            )}

            {/* Error message */}
            {isError && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: {error?.data?.message || "Failed to submit transaction"}
              </div>
            )}

            {/* category & title side by side on larger screens */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* category */}
             <div className="mb-4 w-full">
                <label className="text-gray-300 text-sm mb-2 block">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#1E1E1E] text-white px-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* title */}
              <div className="mb-4 w-full">
                <label className="text-gray-300 text-sm mb-2 block">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#1E1E1E] text-white px-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  placeholder="Title"
                  required
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label className="text-gray-300 text-sm mb-2 block">
                Upload project
              </label>
              <div className="border-2 border-dashed border-gray-700 hover:bg-darkbg rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="file-upload"
                  name="project"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                  className="hidden"
                  required
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="text-gray-400 mb-2 text-2xl">📁</div>
                  <p className="text-gray-400">
                    Drop your files here to upload
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports PDF, JPEG or PNG files. Max size 10 MB.
                  </p>
                  <div
                    type="button"
                    className="mt-4 bg-darkbg border-2 border-gray-700 hover:bg-[#1f1f1f] text-white px-4 py-2 rounded-lg transition h-12"
                  >

                    Choose File
                  </div>
                </label>
                {formData.project && (
                  <div className="mt-4 text-white text-sm">
                    Selected file: {formData.project.name}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`${isLoading ? "bg-[#1f1f1f] " : "bg-darkbg border-2 border-gray-700"
                  } text-white px-6 h-12 rounded-xl transition w-full sm:w-auto`}
              >
                {isLoading ? "submitting..." : "Submit"}
              </button>
            </div>

          </form>
        </div>

      </div>


    </div>


  )
}

export default BankTransactionconfirmation




