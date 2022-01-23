import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

//API
import { getPlacesData } from "./api";

//Components
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

const App = () => {
  const [places, setPlaces] = useState([]);

  //API Call
  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);

      setPlaces(data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
