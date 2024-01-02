import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/assets/css/style02.css'
import '../src/assets/css/style01.css'
import '../src/assets/css/style03.css'
import {
   LandingPage,
   Register,
   Login,
   Student,
   DashboardStudent,
   HomeLayout,
   Error,
   About,
   Compose,
   Admin,
   AdminLayout,
  Stuffs} from './pages';

  // for action and loader 
  import { action as registerAction } from './pages/Register';
  import { action as loginAction } from './pages/Login';
  import { action as composeAction } from './pages/Compose';
  import { action as deleteAction } from './pages/DeleteFeed';
  import { loader as stuffLoader} from './pages/Stuffs';
  import { loader as adminLoader} from './pages/Admin';
  import { loader as statsLoader} from './pages/Stat';
  import { loader as dashboardLoader} from './pages/DashboardStudent';
  import Stats from './pages/Stat';





const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'register',
        element: <Register />,
        action:registerAction
      },
      {
        path:'login',
        element:<Login/>,
        action:loginAction,
      },
    
      {
        path: 'admin',
        element: <AdminLayout />,
       
        children: [
          {
            index: true,
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path:'stats',
            element:<Stats/>,
            loader:statsLoader
          },
          {
            path:'about',
            element:<About/>
          }
        ]
      },
      {
        path: 'dashboard-student',
        element: <DashboardStudent />,
        loader:dashboardLoader,
        children: [
          {
            index: true,
            element: <Student />
          },
          {
            path:'about',
            element:<About/>
          },
          {
            path:'stuffs',
            element:<Stuffs/>,
            loader:stuffLoader
          },
          {
            path:'feedbacks',
            element:<Compose/>,
            action:composeAction
          },
          {
            path: 'delete-feed/:id',
            action:deleteAction
          }
        ]
        
      }
    ]
    }

]);


const App = () => {
  return <RouterProvider router={router} />
};
export default App;