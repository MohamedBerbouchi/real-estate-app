import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Homepage from './pages/home/homepage';
import ListPage from './pages/list/listpage';
import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import Register from './pages/register/register';
import SinglePage from './pages/singlepage/singlePage';
import ProfileUpdate from './pages/profile-update/profileUpdate';

function App() {
  const [count, setCount] = useState(0)
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
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "profile/update",
          element: <ProfileUpdate />,
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
        },
    
      ]
    }
  ]);

  return (
<RouterProvider router={router} />
  )
}

export default App
