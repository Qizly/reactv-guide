import React from 'react';
import LoadingIndicator from './common/loading-indicator.jsx';
import Header from './common/header.jsx';
import Sidebar from './common/sidebar.jsx';

const AppTemplate = ({location, children}) => {
  return (
    <div>
      <Header title="ReactTV Guide" />
      <div className="wrapper">
        <Sidebar location={location}/>
        {children}
      </div>
    </div>
  );
};

export default AppTemplate;
