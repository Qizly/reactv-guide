import React from 'react';
import LoadingIndicator from './common/loading-indicator.jsx';
import Header from './common/header.jsx';
import Sidebar from './common/sidebar.jsx';
//import

const AppTemplate = ({location, children}) => {
  //let {location, children} = props;

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

{/*
class AppTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };

    this.setLoadingIndicator = this.setLoadingIndicator.bind(this);
  }

  setLoadingIndicator(loaderState) {
    this.setState({ isLoading: loaderState });
  }

  render() {
    let loader = this.state.isLoading ? <LoadingIndicator /> : null;
    let {location} = this.props;

    return (
      <div>
        <Header />
        {loader}
        <div className="wrapper">
          <Sidebar location={location} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
*/}
export default AppTemplate;
