import React, {useState} from "react";
import Logo from "../Assets/Logo.svg"
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import {
    Box,
    Drawer, List,
    ListItem, ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon:<HomeIcon/>
        },
        {
            text: "About",
            icon:<InfoIcon/>
        },
        {
            text: "Testimonials",
            icon:<CommentRoundedIcon/>
        },
        {
            text: "Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text: "Cart",
            icon:<ShoppingCartRoundedIcon/>
        },
    ];
    return(
        <nav>
            <div className="nav-logo-container">
                <div className="nav-logo-container2">
                <img src={Logo} alt="" />
                    <div className="shift">
                <div className="navbar-links-container">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact</a>
                    <a href="">
                        <BsCart2 className="navbar-cart-icon"/>
                    </a>
                    <button className="primary-button">
                        Bookings Now
                    </button>
                </div>
                </div>

                </div>
                <div className="navbar-menu-container">
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
                </div>
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
            anchor="left">
                <Box
                sx={{width: 250}}
                role="presentation"
                onClick={()=> {setOpenMenu(false)}}
                onKeyDown={()=> setOpenMenu(false)}
                >
                 <List>
                     {menuOptions.map((item)=>(
                         <ListItem key={item.text} disablePadding>
                             <ListItemButton>
                                 <ListItemIcon>{item.icon}</ListItemIcon>
                                 <ListItemText primary={item.text}/>
                             </ListItemButton>
                         </ListItem>
                     ) )}
                 </List>

                </Box>
            </Drawer>
        </nav>
    )
}
export default Navbar;