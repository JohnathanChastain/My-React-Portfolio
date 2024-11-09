import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

// Importing the App component, and the components that will be rendered on the different pages
import App from './App';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

import 'bootstrap/dist/css/bootstrap.min.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        loader: async () => redirect('/About'),
      },
      {
        index: true,
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Skills',
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
