import React, { useState } from "react";
import { Link } from "react-router";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { setLibrary } from "../../features/LibraryList/LibrarySlice";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../Sidebar/Sidebar";

function AddBooks() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState({
    id: "",
    name: "",
    subject: "",
    writter: "",
    class: "",
    published: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !bookDetails.id ||
      !bookDetails.name ||
      !bookDetails.subject ||
      !bookDetails.writter ||
      !bookDetails.class ||
      !bookDetails.published
    ) {
      toast.error("All fields are required");
      return;
    }

    const updatedBooks = [...books, bookDetails];
    setBooks(updatedBooks);
    dispatch(setLibrary(updatedBooks));

    toast.success("Book Added Successfully");

    setBookDetails({
      id: "",
      name: "",
      subject: "",
      writter: "",
      class: "",
      published: "",
    });
  };

  const handleReset = () => {
    setBookDetails({
      id: "",
      name: "",
      subject: "",
      writter: "",
      class: "",
      published: "",
    });
  };

  const classList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col bg-gray-200 w-screen">
        <Header />
        <div className="p-10 flex flex-col">
          <p className="text-3xl bg-blue-500 rounded-md px-5 py-3 text-white">Library</p>
          <div className="flex justify-start gap-2 flex-row my-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Library</Link>
          </div>

          <div className="flex flex-col bg-white p-10 rounded-xl">
            <p className="text-2xl">Add New Book</p>
            <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-5 justify-between px-5">
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">Book Name</p>
                  <input
                    value={bookDetails.name}
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, name: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">Subject</p>
                  <input
                    value={bookDetails.subject}
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        subject: e.target.value,
                      })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">Writer Name</p>
                  <input
                    value={bookDetails.writter}
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        writter: e.target.value,
                      })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg w-full"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">Class</p>
                  <select
                    value={bookDetails.class}
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, class: e.target.value })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg"
                    required
                  >
                    <option value="">Select Class</option>
                    {classList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-row mt-20 gap-10 px-5">
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">Published Date</p>
                  <input
                    value={bookDetails.published}
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        published: e.target.value,
                      })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg"
                    type="date"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-gray-500 text-xl mb-5">Book ID</p>
                  <input
                    value={bookDetails.id}
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        id: parseInt(e.target.value) || "",
                      })
                    }
                    className="bg-gray-300 px-5 py-3 rounded-lg"
                    type="number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-20 px-5">
                <button
                  className="px-10 py-3 bg-[#FE8D01] rounded-lg text-white font-semibold text-xl active:scale-95 transition-transform"
                  type="submit"
                >
                  Save
                </button>
                <ToastContainer />
                <button
                  type="button"
                  className="px-10 py-3 bg-blue-800 rounded-lg text-white font-semibold text-xl active:scale-95 transition-transform"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;
