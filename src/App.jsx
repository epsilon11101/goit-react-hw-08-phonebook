import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";

import { refreshUser } from "./store/auth/operations";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import RootLayout from "./pages/RootLayout";

import { PrivateRoute } from "./Routes/PrivateRoute";
import { RestrictedRoute } from "./Routes/RestrictedRoute";

import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import Contacts from "./pages/Contacts";
import UserProfile from "./pages/UserProfile";
import NewContact from "./pages/NewContact";
import ContactInfoPage from "./pages/ContactInfoPage";
import CreateAcount from "./pages/CreateAcount";

const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <RootLayout />,
    children: [
      {
        name: "About",
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/register",
        element: (
          <RestrictedRoute redirectTo="/contacts" component={CreateAcount} />
        ),
      },
      {
        path: "/login",
        element: (
          <RestrictedRoute redirectTo="/user-profile" component={LoginPage} />
        ),
      },
      {
        name: "Contacts",
        path: "/contacts",
        element: <PrivateRoute redirectTo="/login" component={Contacts} />,
      },
      {
        name: "New Contact",
        path: "/new-contact",
        element: <PrivateRoute redirectTo="/login" component={NewContact} />,
      },
      {
        path: "/user-profile",
        element: <PrivateRoute redirectTo="/login" component={UserProfile} />,
      },
      {
        path: "/contact-info/:contactId",
        element: (
          <PrivateRoute redirectTo="/login" component={ContactInfoPage} />
        ),
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
