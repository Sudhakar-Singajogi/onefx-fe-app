import {
    Route,
    Redirect,
    Navigate
  } from 'react-router-dom';
  
  // function PublicRoute({ children, isAuthenticated, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={
  //         ({ location }) => (
  //           !isAuthenticated ? (
  //             children
  //           ) : (
  //             <Redirect
  //               to={{
  //                 pathname: '/dashboard',
  //                 state: { from: location }
  //               }}
  //             />
  //           ))
  //       }
  //     />
  //   );
  // }
 
  const PublicRoute = ({
    isAuthenticated,
    redirectPath='/dashboard',
    children,
  }) => {
    console.log('isAuthenticatedsd:', isAuthenticated)
    if (isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };
  
  export default PublicRoute;