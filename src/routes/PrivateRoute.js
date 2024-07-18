import {
    Route,
    Navigate,
    Outlet
  } from 'react-router-dom';
  
  
  // function PrivateRoute({ children, isAuthenticated, ...rest }) {
  //   console.log('children is:', children)
  //   return (
  //     <Route
  //       {...rest}
  //       render={
  //         ({ location }) => (
  //           isAuthenticated
  //             ? (
  //               children
  //             ) : (
  //               <Navigate to="/login" replace />
  //             ))
  //       }
  //     />
  //   );
  // } 

  const PrivateRoute = ({
    isAuthenticated,
    redirectPath='/login', 
    children
  }) => {
    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };
  
  export default PrivateRoute;