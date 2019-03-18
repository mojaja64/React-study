import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "200%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 150
      //"&:focus": {
      // width: 200
      //}
    }
  }
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class Header extends React.Component {
  state = {
    tabIndex: 0,
    server: 0,
    summonerName: ""
  };

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  handleChangeIndex = index => {
    this.setState({ tabIndex: index });
  };

  handleChangeName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeServer = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              React-Study
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="SummonerName"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                value={this.state.summonerName}
                onChange={this.handleChangeName}
                name="summonerName"
              />
            </div>
            <FormControl className={classes.formControl}>
              {/*
              <InputLabel shrink htmlFor="age-label-placeholder">
                Server
              </InputLabel>
              */}
              <Select
                value={this.state.server}
                onChange={this.handleChangeServer}
                input={<Input name="server" id="server-label-placeholder" />}
                displayEmpty
                name="server"
                className={classes.selectEmpty}
              >
                <MenuItem value={0}>JP</MenuItem>
                <MenuItem value={1}>KR</MenuItem>
                <MenuItem value={2}>EU</MenuItem>
                <MenuItem value={3}>NA</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
          <Paper elevation={0} square={true}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">{this.state.summonerName}</Typography>
          </Paper>
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleChange}
            variant="fullWidth"
            name="tabIndex"
          >
            <Tab label="Games" />
            <Tab label="Champions" />
            <Tab label="performance" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.tabIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Typography variant="h5" component="h3">
              Item One
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="h5" component="h3">
              Item Two
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="h5" component="h3">
              Item Three
            </Typography>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
