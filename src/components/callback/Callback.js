import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "../../config/Auth";

class Callback extends Component {
  async componentDidMount() {
    const url = '/user/shop'
    await auth0Client.handleAuthentication();
    this.props.history.replace(url);
  }

  render() {
    return (
      <>
        <h4>Loading ...</h4>
      </>
    );
  }
}

export default withRouter(Callback);
