import { Typography, Box, useTheme } from "@mui/material";
import React from "react";
import ButtonAdd from "./ButtonAdd";

const Header = ({ title, subtitle, addButton, reportButton, tag}) => {
  const theme = useTheme();
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box >
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
    
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle} 
      </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
       <ButtonAdd addButton={addButton} reportButton={reportButton} tag={tag}/>
      </Box>
    </Box>
    </> 
  );
};

export default Header;
