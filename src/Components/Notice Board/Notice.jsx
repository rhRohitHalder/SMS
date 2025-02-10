import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { setNotice } from '../../features/Notice/NoticeSlice';
import { useDispatch, useSelector } from "react-redux";

function Notice() {
  const dispatch = useDispatch();
  const noticeLists = useSelector((state) => state.Notice.value);
  const [noticeList, setNoticeList] = useState([]);
  const [noticeDetails, setNoticeDetails] = useState({
    title: "",
    details: "",
    postedBy: "",
    Date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    if (
      noticeDetails.title &&
      noticeDetails.details &&
      noticeDetails.postedBy
    ) {
      setNoticeList([...noticeList, noticeDetails]);
      dispatch(setNotice([...noticeList, noticeDetails]));
      setNoticeDetails({
        title: "",
        details: "",
        postedBy: "",
        Date: new Date().toISOString().split("T")[0],
      });
    }
  };

  const handleReset = () => {
    setNoticeDetails({
      title: "",
      details: "",
      postedBy: "",
      Date: new Date().toISOString().split("T")[0],
    });
  };

  const colorList = {
    1: "red",
    2: "green",
    3: "#bda800",
    4: "blue",
    5: "gray",
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-full h-auto">
        <Header />
        <div className="w-full h-full p-10 ">
          <p className="text-3xl font-semibold">Notice Board</p>
          <div className="w-full h-auto flex flex-row gap-10 mt-10">
            {/* Left Side - Form */}
            <div className="w-1/3  bg-slate-300 p-10 rounded-lg">
              <p className="text-4xl font-semibold">Create A Notice</p>
              <div className="w-[85%]">
                <p className="mt-5 text-xl mb-2">Title</p>
                <input
                  value={noticeDetails.title}
                  onChange={(e) =>
                    setNoticeDetails({
                      ...noticeDetails,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter Title"
                  className="w-full px-4 py-4 rounded-lg"
                  type="text"
                  required
                />
                <p className="mt-5 text-xl mb-2">Details</p>
                <input
                  value={noticeDetails.details}
                  onChange={(e) =>
                    setNoticeDetails({
                      ...noticeDetails,
                      details: e.target.value,
                    })
                  }
                  placeholder="Enter Details"
                  className="w-full px-4 py-4 rounded-lg"
                  type="text"
                  required
                />
                <p className="mt-5 text-xl mb-2">Posted By</p>
                <input
                  value={noticeDetails.postedBy}
                  onChange={(e) =>
                    setNoticeDetails({
                      ...noticeDetails,
                      postedBy: e.target.value,
                    })
                  }
                  placeholder="Enter Name"
                  className="w-full px-4 py-4 rounded-lg"
                  type="text"
                  required
                />
                <p className="mt-5 text-xl mb-2">Date</p>
                <input
                  value={noticeDetails.Date}
                  onChange={(e) =>
                    setNoticeDetails({
                      ...noticeDetails,
                      Date: e.target.value,
                    })
                  }
                  className="w-full px-4 py-4 rounded-lg"
                  type="date"
                  required
                />
                <div className="w-full flex gap-10 flex-row mt-10 text-white">
                  <button
                    onClick={() => handleSubmit()}
                    className="px-10 text-2xl font-semibold py-2 bg-yellow-600 rounded-lg cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-10 text-2xl font-semibold py-2 bg-blue-950 rounded-lg cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Table */}
            <div className="w-2/3 bg-slate-300 p-10 rounded-lg">
              <p className="text-4xl font-semibold">Notice Board</p>
              <div className="mt-5">
                {noticeLists.length > 0 ? (
                  noticeLists.map((notice, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 bg-white rounded-lg shadow-md"
                    >
                      <p
                        style={{ backgroundColor: colorList[(index % 5) + 1] }}
                        className="text-lg text-white font-semibold px-5 mb-3 py-2 rounded-full inline-block"
                      >
                        {notice.Date}
                      </p>
                      <p className="text-2xl font-semibold">{notice.title}</p>
                      <p className="text-lg">{notice.details}</p>
                      <p>
                        <strong>Posted By:</strong> {notice.postedBy}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xl text-gray-600">
                    No notices posted yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
