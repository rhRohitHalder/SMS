import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Login() {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-6xl font-bold mb-20">Welcome Back</h1>
      <Tabs className="mt-10">
        <TabList className="flex justify-center">
          <Tab className="outline-none bg-red-400 cursor-pointer mx-4 px-4 py-2 rounded-lg">
            Sign In as Admin
          </Tab>
          <Tab className="outline-none bg-yellow-400 cursor-pointer mx-4 px-4 py-2 rounded-lg">
            Sign In as Teacher
          </Tab>
          <Tab className="outline-none bg-green-400 cursor-pointer mx-4 px-4 py-2 rounded-lg">
            Sign In as Student
          </Tab>
        </TabList>

        <TabPanel>
          <form
            className="flex flex-col p-20 bg-gray-200 mt-10 rounded-xl gap-2"
            action=""
          >
            <p>UserName</p>
            <input type="text" className="px-4 py-2 rounded-lg" />
            <p>Password</p>
            <input type="password" className="px-4 py-2 rounded-lg" />
            <input
              type="submit"
              value="Sign In"
              className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white"
            />
          </form>
        </TabPanel>
        <TabPanel>
          <form
            className="flex flex-col p-20 bg-gray-200 mt-10 rounded-xl gap-2"
            action=""
          >
            <p>UserName</p>
            <input type="text" className="px-4 py-2 rounded-lg" />
            <p>Password</p>
            <input type="password" className="px-4 py-2 rounded-lg" />
            <input
              type="submit"
              value="Sign In"
              className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white"
            />
          </form>
        </TabPanel>
        <TabPanel>
          <form
            className="flex flex-col p-20 bg-gray-200 mt-10 rounded-xl gap-2"
            action=""
          >
            <p>UserName</p>
            <input type="text" className="px-4 py-2 rounded-lg" />
            <p>Password</p>
            <input type="password" className="px-4 py-2 rounded-lg" />
            <input
              type="submit"
              value="Sign In"
              className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white"
            />
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Login;
