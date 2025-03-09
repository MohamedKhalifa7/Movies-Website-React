import "./App.css";
import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import Layout from "./Pages/Layout/Layout";
import Profile from "./Pages/Profile/Profile";
import MovieDetails from "./Pages/Home/MovieDetails";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Favorites from "./Pages/Favourite/Favorites";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  const [userData, setUserData] = useState([]);

  const handleRegister = (data) => {
    setUserData((prevData) => [...prevData, data]);
  };
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/profile", element: <Profile userData={userData} /> },
        { path: "/login", element: <Login /> },
        {
          path: "/register",
          element: <Register onRegister={handleRegister} />,
        },
        { path: "/favorite", element: <Favorites /> },
        { path: "/movie/:id", element: <MovieDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <MoviesContextProvider>
          <RouterProvider router={routes} />
        </MoviesContextProvider>
      </Provider>
    </div>
  );
}

export default App;
