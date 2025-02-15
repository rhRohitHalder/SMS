import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";

function BookList() {
  const books = useSelector((state) => state.Library.value);

  return (
    <div className="flex">
        <Sidebar />
      <div className="bg-gray-200 flex flex-col w-screen">
        <Header />
        <div className="flex flex-col p-10">
          <p className="text-3xl bg-blue-500 rounded-md px-5 py-3 text-white">Library</p>
          <div className="flex justify-start gap-2 flex-row my-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Library</Link>
          </div>
          <div className="w-full rounded-lg bg-white p-5 shadow-md">
            <p className="my-5 text-2xl font-semibold">All Books</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Book Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">Writer</th>
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Published
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.length > 0 ? (
                  books.map((book) => (
                    <tr key={book.id} className="text-center">
                      <td className="border-b-gray-300 px-4 py-2">
                        {book.id}
                      </td>
                      <td className="border-b-gray-300 px-4 py-2">
                        {book.name}
                      </td>
                      <td className="border-b-gray-300 px-4 py-2">
                        {book.subject}
                      </td>
                      <td className="border-b-gray-300 px-4 py-2">
                        {book.writter}
                      </td>
                      <td className="border-b-gray-300 px-4 py-2">
                        {book.class}
                      </td>
                      <td className="border-b-gray-300 px-4 py-2">
                        {book.published}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      No books found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookList;
