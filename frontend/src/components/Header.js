import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';
import Logo from '../images/Charusat-logo.png';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'About',
      pageURL: '/about',
    },
    {
      menuTitle: 'Internships',
      pageURL: '/internships',
    },
    {
      menuTitle: 'Profile',
      pageURL: '/profile',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem, index) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => handleMenuClick(pageURL)}
                    >
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/")}
              >
                Home
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/internship")}
              >
                Opportunity
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/contact")}
              >
                Contact
              </Button>
  
              <FormControl
                color="secondary"
                variant="outlined"
                className={`${classes.formControl}`}
              >
                <InputLabel>Login</InputLabel>
                <Select autoWidth label="Login">
                  <MenuItem onClick={() => handleButtonClick("/studentlogin")}>
                    As a Student
                  </MenuItem>
                  <MenuItem onClick={() => handleButtonClick("/employeelogin")}>
                    As an Employer
                  </MenuItem>
                </Select>
              </FormControl>
  
              <FormControl
                color="secondary"
                variant="outlined"
                className={`${classes.formControl} `}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Register
                </InputLabel>
                <Select autoWidth label="Register">
                  <MenuItem onClick={() => handleButtonClick("/studentsignup")}>
                    As a Student
                  </MenuItem>
                  <MenuItem onClick={() => handleButtonClick("/employeesignup")}>
                    As an Employer
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
