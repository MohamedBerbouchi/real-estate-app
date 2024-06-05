import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import ListPage from "./pages/list/listpage";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/register";
import SinglePage from "./pages/singlepage/singlePage";
import ProfileUpdate from "./pages/profile-update/profileUpdate";
import CreatePost from "./pages/create-post/createPost";
import Layout from "./pages/layout/layout";
import AuthLayout from "./pages/layout/authLayout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ListPageLoader } from "./lib/loaders";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },

        {
          path: "list",
          element: <ListPage />,
          loader: ListPageLoader
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: ":id",
          element: <SinglePage />,
          loader: SinglePageLoader,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/post/create",
          element: <CreatePost />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "profile/update",
          element: <ProfileUpdate />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const SinglePageLoader = async (p) => {
  console.log(p);
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return {
    data: data.data,
  };
};
