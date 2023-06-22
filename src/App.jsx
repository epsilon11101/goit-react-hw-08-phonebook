import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import RootLayout from "./pages/RootLayout";
import MainLayout from "./pages/MainLayout";
import Contacts from "./pages/Contacts";
import NewContact from "./pages/NewContact";
import ContactInfoPage from "./pages/ContactInfoPage";
import LoginPage from "./pages/LoginPage";
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
        name: "Contact",
        path: "/contacts",
        element: <Contacts />,
      },
      {
        name: "New Contact",
        path: "/new-contact",
        element: <NewContact />,
      },
      {
        name: "Contact Info",
        path: "/contact-info",
        element: <ContactInfoPage />,
      },
      {
        name: "Login",
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
