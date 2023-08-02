import ContactPage from './pages/ContactPage';
import SkillPage from './pages/SkillPage';
import SamplePage from './pages/SamplePage';
import ProjectPage from './pages/ProjectPage';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SamplePage></SamplePage>,
  },
  {
    path: "/SkillPage",
    element: <SkillPage></SkillPage>,
  },
  {
    path: "/ContactPage",
    element: <ContactPage></ContactPage>,
  },
  {
    path: "/ProjectPage",
    element: <ProjectPage></ProjectPage>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
