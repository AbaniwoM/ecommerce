/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import "./Hamburger.scss";

type Anchor = 'top' | 'left' | 'bottom' | 'right';



export default function Hamburger() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{display: "flex", flexDirection: "column", gap: "7px", color: "#213F7D", paddingLeft: "25px"}}>
            {/* <div style={{display: "flex", alignItems: "center", fontSize: "1.4rem", paddingTop: "15px"}}>User</div> */}
            <div onClick={() => navigate("/")} style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px", color: "#28a745"}}>Home</div>
            <div onClick={() => navigate("/about")} style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px", color: "#28a745"}}>About</div>
            <div onClick={() => navigate("/contact")} style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px", color: "#28a745"}}>Contact</div>
            {/* <div className="drop-down">
                <ProfileDropdown />
            </div> */}
        </List>
    </Box>
  );

  return (
    <div>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{ fontSize: "1.8rem", color: "white"}}>
            <GiHamburgerMenu />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}