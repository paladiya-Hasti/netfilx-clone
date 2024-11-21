import * as React from "react";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { grey } from "@mui/material/colors";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="profile-menu-flex"
        onClick={handleClick}
      >
        <MenuIcon />
        <PersonIcon />
      </div>
      <div className="menu">
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
       
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <div style={{ height: "1px", backgroundColor: "var(--grey)" ,width:"100%" }} />
        <MenuItem onClick={handleClose}>Airbnb your home</MenuItem>
        <MenuItem onClick={handleClose}>Host an exprience </MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
        </div>
    </div>
  );
}
