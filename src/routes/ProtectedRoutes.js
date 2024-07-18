import { Suspense } from 'react';
import { Route, Switch, Routes } from 'react-router-dom';
import routes from './routes';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

console.log('routes', routes)
const ProtectedRoutes = (props) => (  
    <Suspense fallback="" >
      <Routes>
      {
      routes.protected_rotes.map(({ path, component, permalink }) => 
      (
          <Route
          path={path}
          key={permalink}
          element={component}
          
        >
          component
        </Route>
      )
      
      // console.log('path is', {path})
      )
    }
    </Routes>
    </Suspense>
  // </Switch>
);



export default ProtectedRoutes;