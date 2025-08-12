
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import AboutMe from '../Pages/Home/AboutMe';
import Skills from '../Pages/Home/Skills';
import Contact from '../Pages/Home/Contact';
import Projects from '../Pages/Home/Projects';
import ProjectDetails from '../Pages/Home/ProjectDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children: [
        {
        index: true,
        Component: Home
      },
    {
      path: '/about',
      Component: AboutMe
    },
    {
      path: '/skills',
      Component: Skills
    },
    {
      path: '/contactt',
      Component: Contact
    },
    {
      path: '/projects',
      Component: Projects
    },
    {
      path: '/projects/:id',
      Component: ProjectDetails
    },
    ]
  },
]);

