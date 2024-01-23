import React from "react";
import ReactDOM from "react-dom/client";
import App from "./route/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./route/Home";
import Bag from "./route/Bag";
import mytrastore from "./store/store";
import Men from "./route/Men";
import Women from "./route/Women";
import Beauty from "./route/Beauty";
import Loginin from "./route/Loginin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/Beauty", element: <Beauty /> },
      { path: "/login", element: <Loginin /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={mytrastore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
