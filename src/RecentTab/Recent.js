import React, { Component } from "react";
import UploadList from "../Upload/UploadList";

class Recent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h5 style={{ textAlign: "center" }}> Recent Uploads</h5>
        <UploadList data={this.props.data} />
      </div>
    );
  }
}

export default Recent;
