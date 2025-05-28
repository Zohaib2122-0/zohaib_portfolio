import { Phone } from 'lucide-react';

export const AffordablePackagesSection=()=> {
  return (
    <div className="min-h-fit bg-gray-50 py-7 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-green-500">Affordable</span>{' '}
            <span className="text-gray-700">Packages for You</span>
          </h1>
          
          {/* Blue divider line */}
          <div className="w-full h-1 bg-blue-600 mb-12"></div>
          
          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer reasonable subscription packages with best-suited features for your hospital 
              management system. For full information and packages, Contact Us.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16 space-x-3">
         <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
              Book Appointment Now
              </button>
        </div>

 {/* <div className="flex flex-col sm:flex-row gap-4">
              
            </div> */}
    
      </div>
    </div>
  );
}