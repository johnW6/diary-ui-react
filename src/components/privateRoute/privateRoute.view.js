import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import useAuthentication from '../../hooks/authentication/useAuthentication';

const PrivateRouteView = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthentication();
  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

PrivateRouteView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteView;
