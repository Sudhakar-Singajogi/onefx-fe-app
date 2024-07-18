import { lazy } from 'react';
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageRoutine from '../pages/Academic/ManageRoutine';
import ManageClasses from "../pages/Academic/ManageClasses"

import Breadcrumb from '../components/breadcrumb/Breadcrumb';


const routes = {
        "public_rotes": {
          path: "/login",
          permalink:"login",
          component: <Login />
        },
        "protected_rotes": [
          {
            path: "/dashboard",
            permalink:"dashboard",
            component: <Dashboard params={{"setMargin": "225px", "Breadcrumb":<Breadcrumb params={{"currentPath":"", "showDashboard":true}} />}} />
          },
          {
            path: "/academic/routine",
            permalink:"manage-routine",
            component: <ManageRoutine params={{"setMargin": "225px", "Breadcrumb":<Breadcrumb params={{"currentPath":"manage routine", "showDashboard":true}} />}}/>
          },
          {
            path:"/academic/manage-classes",
            permalink : "manage-classes",
            component:<ManageClasses params={{"setMargin": "225px", "Breadcrumb":<Breadcrumb params={{"currentPath":"manage classes", "showDashboard":true}} />}}/>
          }
      ],
        
      };
export default routes;


//export default function App() {
  
  // const SilRoutes = () => {
  //   useRoutes(
  //     {
  //       "public_rotes": {
  //         path: "/login",
  //         permalink:"login",
  //         component: <Login />
  //       },
  //       "protected_rotes": [
  //         {
  //           path: "/dashboard",
  //           permalink:"dashboard",
  //           component: <Dashboard />
  //         },
  //         {
  //           path: "/testpage",
  //           permalink:"Testpage",
  //           component: <TestPage />
  //         }
  //     ],
        
  //     }
  
        
  //     );

  // } 
  //   export default SilRoutes;