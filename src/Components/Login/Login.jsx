import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch } from "react-redux";



function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (role) => (e) => {
    e.preventDefault();
    console.log(`Authenticating as ${role}:`, credentials);
    dispatch({ type: "ASSIGN_ROLE", payload: role });
    dispatch({ type: "ASSIGN_NAME", payload: credentials.username });
    navigation(`/dashboard`);
    setCredentials({ username: "", password: "" });
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen w-screen">
      <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 bg-blend-overlay">
        <div className="border-2 p-10 border-black rounded-lg flex flex-col justify-center items-center">
          <Tabs className="mt-10">
            <TabList default={1} className="flex flex-col lg:flex-row justify-center md:flex-col gap-2 selection:cursor-not-allowed">
              <Tab selectedClassName="bg-white text-purple-500 font-semibold" className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer mx-4 px-4 py-2 rounded-lg">
                Sign In as Admin
              </Tab>
              <Tab selectedClassName="bg-white text-purple-500 font-semibold" className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer mx-4 px-4 py-2 rounded-lg">
                Sign In as Teacher
              </Tab>
              <Tab selectedClassName="bg-white text-purple-500 font-semibold" className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer mx-4 px-4 py-2 rounded-lg">
                Sign In as Student
              </Tab>
            </TabList>
            <TabPanel>
              <form
                onSubmit={handleSubmit("Admin")}
                className="flex flex-col px-20 py-10 bg-gray-200 mt-10 rounded-xl gap-2"
                name="Admin"
              >
                <p className="text-2xl">UserName</p>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                />
                <p className="text-2xl">Password</p>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                />
                <input
                  type="submit"
                  value="Sign In"
                  className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white mt-10"
                />
              </form>
            </TabPanel>
            <TabPanel>
              <form
                onSubmit={handleSubmit("Teacher")}
                className="flex flex-col px-20 py-10 bg-gray-200 mt-10 rounded-xl gap-2"
                name="Teacher"
              >
                <p className="text-2xl">UserName</p>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                />
                <p className="text-2xl">Password</p>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                />
                <input
                  type="submit"
                  value="Sign In"
                  className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white mt-10"
                />
              </form>
            </TabPanel>
            <TabPanel>
              <form
                onSubmit={handleSubmit("Student")}
                className="flex flex-col px-20 py-10 bg-gray-200 mt-10 rounded-xl gap-2"
                name="Student"
              >
                <p className="text-2xl">UserName</p>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                />
                <p className="text-2xl">Password</p>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                />
                <input
                  type="submit"
                  value="Sign In"
                  className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white mt-10"
                />
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Login;
