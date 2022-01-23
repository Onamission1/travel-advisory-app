import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";

//Styles
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.tittle}>
          Miller Travel Advisory
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.tittle}>
            Explore new environments
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search anything..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
