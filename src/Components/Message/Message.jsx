import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";

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
      <div className="w-full h-full">
        <Header />
        <div className="w-full h-auto p-10">
        <p className="text-3xl font-semibold bg-blue-500 rounded-md px-5 py-4 text-white">Messaging</p>
        <div className="w-full h-full flex justify-center items-center">
          <div className="mt-20 bg-gray-200 w-3/4 px-20 py-20 rounded-lg">
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
                  className="px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg cursor-pointer active:scale-95 transition-transform"
                  type="submit"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="px-10 text-2xl font-semibold py-2 bg-red-600 rounded-lg cursor-pointer active:scale-95 transition-transform"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Message;
