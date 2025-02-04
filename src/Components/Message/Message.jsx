import React from "react";

function Message() {
    const handleSubmit = () => {
        e.preventDefault();
        console.log('ok')
    }
  return (
    <div className="w-full h-full p-10">
      <p className="text-5xl font-semibold">Messaging</p>
      <div className="w-full h-full flex justify-center items-center">
        <div className="mt-20 bg-gray-400 w-3/4 px-20 py-20 rounded-lg">
          <p className="text-4xl font-semibold">Write New Message</p>
          <form onSubmit="handleSubmit">
            <p className="mt-5 text-xl mb-2">Title</p>
            <input 
            placeholder="Enter Title"
            className="w-full p-4 rounded-lg"
            type="text" />
            <p className="mt-5 text-xl mb-2">Recipient</p>
            <input 
            className="w-full p-4 rounded-lg"
            type="text" />
            <p className="mt-5 text-xl mb-2">Message</p>
            <textarea 
            className="w-full h-52 p-4 rounded-lg"></textarea>
            <div className="flex gap-10 text-white mt-10">
                <button 
                className="px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg cursor-pointer"
                type="submit">
                    Send
                </button>
                <button 
                className="px-10 text-2xl font-semibold py-2 bg-blue-950 rounded-lg cursor-pointer"
                type="button">
                    Send
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Message;
