import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // أيقونة القائمة
import './nav.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar className="AppBar">
      <Toolbar>
        {/* Logo */}
        <Typography className="Typography">
          <img src="/Images/download.jpg" alt="Logo" />
        </Typography>

        {/* أزرار التنقل للشاشات الكبيرة */}
        <div className="about">
          <Button className="custom-btnn" href="/">HOME</Button>
          <Button className="custom-btnn" href="#about">About</Button>
          <Button className="custom-btnn" href="#contact">Contact</Button>
        </div>

        {/* زر التسجيل */}
        <Button className="custom-btn" href="/login">Login</Button>
        <Button className="custom-btn" href="/Signup">Signup</Button>

        {/* زر القائمة (يظهر فقط في الشاشات الصغيرة) */}
        <IconButton className="menu-button" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </IconButton>

        {/* قائمة التنقل الجانبية للشاشات الصغيرة */}
        <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
          <List>
            <ListItem button onClick={() => setMenuOpen(false)} component="a" href="/">
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)} component="a" href="#about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)} component="a" href="/login">
              <ListItemText primary="CONTENT" />
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)} component="a" href="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => setMenuOpen(false)} component="a" href="/Signup">
              <ListItemText primary="Signup" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
