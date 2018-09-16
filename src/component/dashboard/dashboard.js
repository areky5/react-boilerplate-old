import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from './dashboard.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTest } from './dashboard_action.js';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dashboardState: ""
    };
  }

  componentDidMount() {
    this.props.addTest("This is my react boilerplate");
  }

  render() {
    return (
      <div className={style.mainContainer}>
        {this.props.test}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    test: state.dashboard.test
  };
}
const mapDispatchToProps = {
  addTest,
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));
