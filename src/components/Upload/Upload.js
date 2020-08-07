import React, { Component } from "react";
import "./Upload.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const fileObj = this.props.data.files;

    const totalSizes = [];
    const progress = [];
    const completed = [];

    for (const [key, value] of Object.entries(this.props.data.files)) {
      totalSizes.push(value.totalSizeInBytes);
      progress.push(value.progressInBytes);
      completed.push(value.complete);
      // console.log(
      //   ` Key => ${key} : Values => Complete: ${value.complete}, Total Size: ${value.totalSizeInBytes}, Progress: ${value.progressInBytes}`
      // );
    }
    // console.log("TotalSizes Array: " + totalSizes);
    // console.log("Progress Array: " + progress);
    // console.log("Completed Array: " + completed);

    let incompleteFiles = completed.includes(false);
    console.log(
      "Does this upload contain incomplete files? : " + incompleteFiles
    );

    let progressBar = null;
    const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
    let progressSum = arrSum(progress) / 1000;
    // console.log("progress Sum: " + progressSum);
    let progressPecentage =
      (progressSum / (this.props.data.total_bytes / 1000)) * 100;
    if (incompleteFiles) {
      progressBar = (
        <div>
          <ProgressBar
            now={progressPecentage}
            label={`${Math.ceil(progressPecentage)}%`}
          />
        </div>
      );
    }

    return (
      <div key={this.props.data.session_key}>
        <div className="upload-container">
          <div className="container">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-sm-3" id="box-container">
                <h6>
                  {this.props.data.num_files} files (
                  {Math.ceil(this.props.data.total_bytes / 1000)}) kb
                </h6>
              </div>

              <div className="col-sm-3" id="box-container">
                <h6>User: {this.props.data.user.user_name}</h6>
              </div>

              <div
                className="col-sm-3"
                id="box-container"
                style={{ borderRadius: "25px" }}
              >
                <h6>Status: {this.props.data.status}</h6>
              </div>

              <div className="col-sm-2">
                {this.props.data.status != "COMPLETED" ? (
                  <Button
                    variant="danger"
                    style={{ marginBottom: "5px", marginTop: "6px" }}
                  >
                    X
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="filename-container">
            <h6>
              {this.props.data.num_files === "1" ||
              this.props.data.num_files === "2" ||
              this.props.data.num_files === "3"
                ? "Files: " + Object.keys(fileObj)[0]
                : "Files: " +
                  Object.keys(fileObj)[0] +
                  ", " +
                  Object.keys(fileObj)[1] +
                  ", " +
                  Object.keys(fileObj)[2] +
                  " and " +
                  (this.props.data.num_files - 3) +
                  " more"}
            </h6>
          </div>

          <div className="date-container">
            <h6>Started on: {this.props.data.created_on}</h6>
            {this.props.data.status === "COMPLETED" ? (
              <h6>Completed On: {this.props.data.completed_on}</h6>
            ) : (
              ""
            )}
          </div>

          {progressBar}
        </div>
      </div>
    );
  }
}

export default Upload;
