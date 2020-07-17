import React, { Component } from "react";
import "../App.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.data.status,
    };
  }

  render() {
    console.log(this.state.status);
    return (
      <div key={this.props.data.id}>
        <div className="upload-container">
          <div className="container">
            <div className="row">
              <div class="col-sm-2">
                <h6>{this.props.data.files.length} files</h6>
              </div>
              <div class="col-sm-2">
                <h6>User: {this.props.data.user}</h6>
              </div>
              <div class="col-sm-2">
                <h6>Status: {this.state.status}</h6>
              </div>

              <div class="col-sm-2">
                {this.props.data.status === "in progress" ? (
                  <Button variant="danger" style={{ marginBottom: "5px" }}>
                    X
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <h6>Started on: {this.props.data.started_date}</h6>

          {this.state.status === "completed" ? (
            <h6>Completed On: {this.props.data.completed_date}</h6>
          ) : (
            ""
          )}

          {this.props.data.status === "in progress" ? (
            <ProgressBar now={60} label={`${60}%`} />
          ) : (
            ""
          )}

          <h6>
            Files: {this.props.data.files[0]}, {this.props.data.files[1]},{" "}
            {this.props.data.files[2]} and {this.props.data.files.length - 3}{" "}
            more
          </h6>
        </div>
      </div>
    );
  }
}

export default Upload;
