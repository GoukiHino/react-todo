import React from "react";
import {Link, Typography} from "@mui/material";


const Footer = () => {
    return (
        <Typography variant="body2" color="secondary.main" align="center">
            Copyright &copy;
            {" "}
            {new Date().getFullYear()}
            {" "}
            <Link color="inherit" href="https://material-ui.com/">Your Website</Link>
        </Typography>
    );
};

export default Footer;
