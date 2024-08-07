import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  const navLinks = [
    {
      title: "Dashboard",
      logo: <HomeIcon />,
      redirect: "/",
    },
    {
      title: "Analytics",
      logo: <AutoGraphIcon />,
      redirect: "/",
    },
    {
      title: "To do",
      logo: <NoteAltIcon />,
      redirect: "/",
    },
    {
      title: "Transactions",
      logo: <ReceiptIcon />,
      redirect: "/",
    },
  ];

  const handleRedirect=(link)=>{
    navigate(link);
  }

  return (
    <div className="Sidebar">
        {navLinks.map((links) => {
          return (
            <Box className="nav-box" onClick={()=>handleRedirect(links.redirect)}>
                {links.logo}
            </Box>
          );
        })}
    </div>
  );
}

export default Sidebar;
