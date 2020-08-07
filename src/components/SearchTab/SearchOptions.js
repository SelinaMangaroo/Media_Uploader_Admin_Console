import React, { Component } from "react";
import "./Search.css";
import Button from "react-bootstrap/Button";
import UploadList from "../Upload/UploadList";

class SearchOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      selectedStatus: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    alert(
      "Submitted: " +
        "User: " +
        this.state.selectedUser +
        " Status: " +
        this.state.selectedStatus
    );
    event.preventDefault();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    let filteredUploads = this.props.data.filter((upload) => {
      return upload.user.user_name.includes(this.state.selectedUser);
    });

    return (
      <div>
        <div className="search-container">
          <div className="container">
            <div className="row">
              <form className="header" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username" style={{ marginRight: "5px" }}>
                    UserList
                  </label>
                  <select
                    value={this.state.selectedUser}
                    onChange={this.handleChange}
                    name="selectedUser"
                  >
                    {this.props.data.map((upload) => {
                      return (
                        <option
                          value={upload.user.user_name}
                          key={upload.session_key}
                        >
                          {upload.user.user_name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <h6>Selected User: {this.state.selectedUser}</h6>
                <br />

                <div className="form-group">
                  <label htmlFor="upload-status" style={{ marginRight: "5px" }}>
                    Upload Status
                  </label>
                  <select
                    value={this.state.selectedStatus}
                    onChange={this.handleChange}
                    name="selectedStatus"
                  >
                    <option>COMPLETED</option>
                    <option>IN PROGRESS</option>
                  </select>
                </div>

                <h6>Selected Status: {this.state.selectedStatus}</h6>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <UploadList data={filteredUploads} />
      </div>
    );
  }
}

export default SearchOptions;
