import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Adicione esta linha
import App from "./App.jsx";
import "./index.css";
import TaskPage from "./pages/TaskPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks",
    element: <TaskPage />,
  },
  {
    path: "/tasks/:title/:description",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
