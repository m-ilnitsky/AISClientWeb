import './homePage.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


interface IHomePageProps{

}

interface IHomePageState{

}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  render() {
    return (
      <div>
        HOME PAGE
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => { dispatch()  }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
