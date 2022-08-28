// @fsc
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import MailIcon from "@mui/icons-material/Mail";

import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PersonIcon from "@mui/icons-material/Person";
import StyleIcon from "@mui/icons-material/Style";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

type Props = {};
export const Header = () => {
  const [menuToogle, setMenuToogle] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);

  const menuToogleHandler = (changeStat: boolean) => {
    setMenuToogle(changeStat);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#bf62c4",
        height: "7vh",
        display: "flex",
      }}
    >
      <Button onClick={() => menuToogleHandler(true)}>
        <MenuIcon sx={{ color: "#fcbdff", fontSize: "40px" }} />
      </Button>

      <SwipeableDrawer
        anchor={"left"}
        open={menuToogle}
        onClose={() => setMenuToogle(false)}
        onOpen={() => setMenuToogle(true)}
      >
        <List
          sx={{ width: "100%", maxWidth: "20vw", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menú
            </ListSubheader>
          }
        >
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "	rgb(0, 0, 0,0.87)" }}
            onClick={() => setMenuToogle(false)}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </NavLink>

          <NavLink
            to="/user"
            style={{ textDecoration: "none", color: "	rgb(0, 0, 0,0.87)" }}
            onClick={() => setMenuToogle(false)}
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Usuario" />
            </ListItemButton>
          </NavLink>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Cartas" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink
                to="/cards"
                style={{ textDecoration: "none", color: "	rgb(0, 0, 0,0.87)" }}
                onClick={() => setMenuToogle(false)}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StyleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cartas MTG" />
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/cards"
                style={{ textDecoration: "none", color: "	rgb(0, 0, 0,0.87)" }}
                onClick={() => setMenuToogle(false)}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StyleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cartas Pokemon" />
                </ListItemButton>
              </NavLink>
            </List>
          </Collapse>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default Header;
