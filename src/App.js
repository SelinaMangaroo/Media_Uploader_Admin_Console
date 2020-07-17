import React, { Component } from "react";
import data from "./data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import Recent from "./components/RecentTab/Recent";
import Search from "./components/SearchTab/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "recent",
      data: data,
    };
    this.handleSelectedTab = this.handleSelectedTab.bind(this);
  }

  handleSelectedTab(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab,
    });
  }

  render() {
    console.log(this.state.activeTab);
    console.log(this.state.data);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Media Uploader Admin Console</h1>

        <div className="container">
          {/* <div class="row"></div> */}

          <Tabs
            activeKey={this.state.activeTab}
            onSelect={this.handleSelectedTab}
          >
            <Tab eventKey="recent" title="Recent">
              <Recent data={this.state.data} />
            </Tab>
            <Tab eventKey="search" title="Search">
              <Search data={this.state.data} />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
