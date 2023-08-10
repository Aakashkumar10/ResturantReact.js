import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <>

            <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}>

                <Box sx={{
                    my: 3, " & svg": {
                        fontSize: "50px",
                        cursor: "pointer",
                        mr: 4,
                    }, " & svg :hover ": {
                        color: "red", transform: 'translateX(5px )',
                        transition: " all 600ms",
                    }
                }}>
                    <TwitterIcon />
                    <FacebookIcon />
                    <GitHubIcon />
                    <WhatsAppIcon />
                    <EmailIcon />

                </Box>
                <Typography variant="h5" sx={{ "@media(max-width:600px)": { fontSize: "1 rem" }, }}>
                    All  Rigths Reserved &copy; AAKASH TECH ;

                </Typography>

            </Box>
        </>
    )
}

export default Footer