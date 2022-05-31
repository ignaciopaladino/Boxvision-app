import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";

import Tab from "@material-ui/core/Tab";

import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  tablabel: {
    fontSize: "1.4rem"
  }
};

export const Header = props => {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ width: "10%", alignSelf: "center" }}>
            <Typography
              variant="h5"
              color="inherit"
              className={styles.grow}
              align="center"
            >
              Box Vision
            </Typography>
          </div>
          {/*    <div style={{ width: "90%", height: "38px" }}>
            <div style={{ width: "50%", margin: "auto" }}>
              <Tabs centered value={0} fullWidth>
                <Tab label="Productos" style={styles.tablabel} />
                <Tab label="Pedidos" style={styles.tablabel} />
              </Tabs>
  </div>
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
