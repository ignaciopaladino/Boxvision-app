import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const faceFilter = require("facefilter");

let step = 0;
class Visualizer extends React.Component {
  componentDidMount() {
    faceFilter.init({
      //you can also provide the canvas directly
      //using the canvas property instead of canvasId:
      canvasId: "jeeFaceFilterCanvas",
      NNCpath: "/facetracking/dist/NNC.json", //path to JSON neural network model (NNC.json by default)
      callbackReady: function(errCode, spec) {
        if (errCode) {
          console.log("AN ERROR HAPPENS. ERROR CODE =", errCode);
          return;
        }
        //[init scene with spec...]
        console.log("INFO: JEEFACEFILTERAPI IS READY");
      }, //end callbackReady()

      //called at each render iteration (drawing loop)
      callbackTrack: function(detectState) {
        //render your scene here
        //[... do something with detectState]
      } //end callbackTrack()
    }); //end init call

    step = 2;
  }
  render() {
    return <React.Fragment />;
  }
}
export default Visualizer;
