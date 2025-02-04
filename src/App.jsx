
import Sidebar from "./Components/Sidebar/Sidebar";
import React from "react";
import Notice from "../src/Components/Notice Board/Notice";
import Hostel from "./Components/Hostel/Hostel";
import Message from "./Components/Message/Message";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Message />
      </div>
    </div>
  );
}

export default App;
