import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Page/Home/Home";
import ContactForm from "./Page/ContactForm/ContactForm";
import ContactCard from "./Component/ContactCard/ContactCard";
import { ConfirmationNumberSharp } from "@mui/icons-material";
import ContactDetails from "./Page/ContactDetails/ContactDetails";
import EditForm from "./Page/EditForm/EditForm";
import Dashboard from "./Component/DashBoard/DashBoard";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ContactForm />} path="/form" />
        <Route element={<ContactCard />} path="/card" />
        <Route element={<ContactDetails />} path="/details" />
        <Route element={<ContactDetails />} path="/details/:name" />
        <Route element={<EditForm />} path="/editform" />
        <Route element={<EditForm />} path="/editform/:name" />4
        <Route element={<Dashboard />} path="/dashBoard" />
      </Routes>
    </BrowserRouter>
  </Provider>
);
