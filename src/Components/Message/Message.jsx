import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Message() {
  const [message, setMessage] = useState({
    title: "",
    recipient: "",
    message: "",
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.title === "" || message.recipient === "" || message.message === "") {
      toast.error("Please fill all the fields");
    } else {
      toast.success("Message sent successfully");
      reset();
    }
  };

  const reset = () => {
    setMessage({
      title: "",
      recipient: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full h-full p-10">
        <p className="text-5xl font-semibold">Messaging</p>
        <div className="w-full h-full flex justify-center items-center">
          <div className="mt-20 bg-gray-400 w-3/4 px-20 py-20 rounded-lg">
            <p className="text-4xl font-semibold">Write New Message</p>
            <form onSubmit={handleSubmit}>
              <p className="mt-5 text-xl mb-2">Title</p>
              <input
                name="title"
                value={message.title}
                onChange={handleChange}
                placeholder="Enter Title"
                className="w-full p-4 rounded-lg"
                type="text"
              />
              <p className="mt-5 text-xl mb-2">Recipient</p>
              <input
                name="recipient"
                value={message.recipient}
                onChange={handleChange}
                placeholder="Enter Recipient"
                className="w-full p-4 rounded-lg"
                type="text"
              />
              <p className="mt-5 text-xl mb-2">Message</p>
              <textarea
                name="message"
                value={message.message}
                onChange={handleChange}
                placeholder="Enter Message..."
                className="w-full h-52 p-4 rounded-lg"
              ></textarea>
              <div className="flex gap-10 text-white mt-10">
                <button
                  className="px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg cursor-pointer"
                  type="submit"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="px-10 text-2xl font-semibold py-2 bg-red-600 rounded-lg cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Message;
