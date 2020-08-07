import React from "react";
import ReactDOM from "react-dom";
import App from "./mediauploaderadmin";

ReactDOM.render(
  <React.StrictMode>
    <App endpoint="http://uploader.whirl-i-gig.com:8085/index.php/batch/MediaUploader/logdata/download/1" />
  </React.StrictMode>,
  document.getElementById("root")
);
