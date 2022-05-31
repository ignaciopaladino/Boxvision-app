import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import MenuProductos from "./MenuProductos";
import MenuOrdenes from "./MenuOrdenes";

import MainContainer from "../components/MainContainer";
export const Main = props => {
  return (
    <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
          <Typography variant="h6" id="modal-title">
            Productos
          </Typography>
          <br />
          <Paper>
            <MenuProductos />
          </Paper>
          <br />
          <Typography variant="h6" id="modal-title">
            Ordenes
          </Typography>
          <br />
          <Paper>
            <MenuOrdenes />
          </Paper>
        </Grid>
        <Grid item xs={9} style={{ marginTop: "20px", marginLeft: "20px" }}>
          <MainContainer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
