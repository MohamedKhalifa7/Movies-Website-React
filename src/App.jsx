import "./App.css";
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

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/profile", element: <Profile /> },
        { path: "/favorite", element: <Favorites/> },
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
