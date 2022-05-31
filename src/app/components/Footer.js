import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  footer: {
    top: "auto",
    bottom: 0,
    height: "50px"
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "-10px"
  }
};

export const Footer = props => {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="default" style={styles.footer}>
        <Toolbar>
          <div style={{ width: "100%", alignSelf: "center" }}>
            <Typography
              variant="h6"
              color="inherit"
              style={styles.grow}
              gutterBottom="false"
            >
              Boxvision© 2022
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  ); //<AppBar color="secondary" style={styles.footer} />;
};
