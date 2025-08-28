
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import AboutMe from '../Pages/Home/AboutMe';
import Skills from '../Pages/Home/Skills';
import Contact from '../Pages/Home/Contact';
import Projects from '../Pages/Home/Projects';
import ProjectDetails from '../Pages/Home/ProjectDetails';
import AllProjects from '../Pages/AllProjects/AllProjects';
import AllSkills from '../Pages/AllSkills/AllSkills';

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
      Component: AllSkills
    },
    {
      path: '/contact',
      Component: Contact
    },
    {
      path: '/projects',
      Component: AllProjects,
      loader: () => fetch('/projects.json')
    },
    {
      path: '/projects/:id',
      Component: ProjectDetails,
      loader: () => fetch('/projects.json')
    },
    ]
  },
]);

