


// // import React from 'react';
// // import { useGetMessagesQuery } from './redux/messagesapislice';

// // const MessagesList = () => {
// //   // 1. Call the RTK Query hook
// //   const {
// //     data: messages,   
// //     error,
// //     isLoading,
// //     isSuccess,
// //     isError,
// //   } = useGetMessagesQuery();

// //   // 2. Render loading state
// //   if (isLoading) {
// //     return (
// //       <div className="p-4 text-center text-gray-500">
// //         Loading messages…
// //       </div>
// //     );
// //   }

// //   // 3. Render error state
// //   if (isError) {
// //     return (
// //       <div className="p-4 text-center text-red-500">
// //         Error fetching messages: {error?.data?.message || error.error}
// //       </div>
// //     );
// //   }
// //   // console.log(data)
// //   console.log(messages)
// //   console.log(
// // messages
// // )

// //   // 4. Render success state (messages array)
// //   return (
// //     <div className="max-w-3xl mx-auto p-4">
// //       <h2 className="text-2xl font-semibold mb-4 text-gray-300">Inbox Messages</h2>

// //       {isSuccess && Array.isArray(messages) && messages.length === 0 && (
// //         <p className="text-gray-600">No messages found.</p>
// //       )}

// //       {isSuccess && Array.isArray(messages) && messages.length > 0 && (
// //         <ul className="space-y-4">
// //           {messages?.map((msg) => (
// //             <li
// //               key={msg.id}
// //               className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-lg font-medium text-gray-300">
// //                   {msg.name} {msg.lastName}
// //                 </h3>
// //                 <span className="text-sm text-gray-500">ID: {msg.id}</span>
// //               </div>

// //               <div className="mt-2 text-gray-300">
// //                 <p>
// //                   <span className="font-medium text-gray-600">Email:</span>{' '}
// //                   {msg.email}
// //                 </p>
// //                 <p>
// //                   <span className="font-medium text-gray-600">Phone:</span>{' '}
// //                   {msg.no}
// //                 </p>
// //               </div>

// //               <div className="mt-3">
// //                 <p className="font-medium text-gray-600">Message:</p>
// //                 <p className="mt-1 text-gray-300 whitespace-pre-wrap">
// //                   {msg.messages}
// //                 </p>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default MessagesList;


// import React from 'react';
// import { useGetMessagesQuery } from './redux/messagesapislice';

// const MessagesList = () => {
//   const {
//     data,       // assuming data is already an array
//     error,
//     isLoading,
//     isError,
//   } = useGetMessagesQuery();

//   if (isLoading) {
//     return <div className="p-4 text-gray-500 text-center">Loading messages…</div>;
//   }

//   if (isError) {
//     return (
//       <div className="p-4 text-red-500 text-center">
//         Error fetching messages: {error?.data?.message || error.error}
//       </div>
//     );
//   }

//   console.log(data)
//   // At this point, data should be your array, or undefined – so guard with “|| []”
//   const messagesArray = Array.isArray(data) ? data : [];
// console.log(messagesArray)
//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-300">Inbox Messages</h2>

//       {messagesArray.length === 0 ? (
//         <p className="text-gray-600">No messages found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {messagesArray.map((msg) => (
//             <li
//               key={msg.id}
//               className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-medium text-gray-300">
//                   {msg.name} {msg.lastName}
//                 </h3>
//                 <span className="text-sm text-gray-500">ID: {msg.id}</span>
//               </div>

//               <div className="mt-2 text-gray-300">
//                 <p>
//                   <span className="font-medium text-gray-600">Email:</span> {msg.email}
//                 </p>
//                 <p>
//                   <span className="font-medium text-gray-600">Phone:</span> {msg.no}
//                 </p>
//               </div>

//               <div className="mt-3">
//                 <p className="font-medium text-gray-600">Message:</p>
//                 <p className="mt-1 text-gray-300 whitespace-pre-wrap">
//                   {msg.messages}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MessagesList;


import React from 'react';
import { useDeleteMessageMutation, useGetMessagesQuery } from './redux/messagesapislice';

const MessagesList = () => {

  // const { id } = req.params
  const {
    data: rawResponse,   // rawResponse is an object like { message: "...", messages: [...] }
    error,
    isLoading,
    isError
  } = useGetMessagesQuery();

  const [deleteMessage, { isLoading: deleting }] = useDeleteMessageMutation()

  // 2. Loading state
  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">
        Loading messages…
      </div>
    );
  }

  // 3. Error state
  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        Error fetching messages: {error?.data?.message || error.error}
      </div>
    );
  }

  // 4. Extract the actual array from rawResponse
  //    If rawResponse is undefined (e.g. still initializing), default to an empty array.
  const messagesArray =
    Array.isArray(rawResponse?.messages) ? rawResponse.messages : [];



  const handledelete = async (id) => {
    try {
      await deleteMessage(id).unwrap()
      rawResponse()
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <div className="max-w-full mx-auto p-4 bg-darkbg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-300">Inbox Messages</h2>

      {messagesArray.length === 0 ? (
        <p className="text-gray-600">No messages found.</p>
      ) : (
        <ul className="space-y-4 ">
          {messagesArray.map((msg) => (
            <li
              key={msg._id}  // assuming Mongoose’s default document ID is _id
              className="border border-gray-200 rounded-lg p-5  shadow-sm   bg-[#1f1f1f] "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-300">
                  {msg.name} {msg.lastName}
                </h3>
              </div>
              <div className="mt-2 text-gray-300">
                <p>
                  <span className="font-medium text-gray-200">Email:</span> {msg.email}
                </p>
                <p>
                  <span className="font-medium text-gray-200">Phone:</span> {msg.no}
                </p>
              </div>
              <div className="mt-3">
                <p className="font-medium text-gray-200">Message:</p>
                <p className="mt-1 text-gray-300 whitespace-pre-wrap">
                  {msg.messages}
                </p>

                <button onClick={() =>handledelete(msg._id)} className='mt-10 w-16 h-8 rounded-md  text-black border-1 border-white bg-red-700' disabled={deleting}>


                  {deleting ? "deleting" : "delete"}

                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessagesList;
