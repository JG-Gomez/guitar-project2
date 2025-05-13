import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useNavigate} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import fontTheme from "./ui/FontTheme.jsx";
import {Button} from "@mui/material";

function ResponsiveAppBar() {

    const navigate = useNavigate();

    const handleBeginnerClick = async () => {
        console.log("works")
        try {
            navigate('/Beginner')
        } catch {
            console.log("not working")
        }
    }

    const handleMetalcoreClick = async () => {
        console.log("metalcore works")
        try {
            navigate('/Metalcore')
        } catch {
            console.log("metalcore no work lol")
        }
    }

    const handleResourcesClick = async () => {
        console.log("resources works")
        try {
            navigate('/Resources')
        } catch {
            console.log("Resources no work")
        }
    }

    const handleHomeClick = async () => {
        console.log("works")
        try {
            navigate('/')
        } catch {
            console.log("not works")
        }
    }

    const handleProfileClick = async () => {
        console.log("icon click works")
        try {
            navigate('/Profile')
        } catch {
            console.log("profile not working")
        }
    }

    return (
        <AppBar position="sticky">

            <Toolbar sx={{display: 'flex', width: '100%',}} disableGutters>

                <div style={{display: 'block', width: 50, height: 100}}/>

                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 5,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <span onClick={handleHomeClick}>
                    Galandor's Grimoire
                    </span>
                </Typography>

                <div className="accordion" style={{display: 'flex', flexDirection: 'row',}}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{mr: 5}}>
                            By Level
                        </AccordionSummary>
                        <AccordionDetails>
                            <span onClick={handleBeginnerClick}>
                            Beginner
                            </span>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="accordion" style={{display: 'flex', flexDirection: 'row',}}>
                    <Accordion style={{marginLeft: 5}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{mr: 5}}>
                            By Style
                        </AccordionSummary>
                        <AccordionDetails>
                            <span onClick={handleMetalcoreClick}>
                            Metalcore
                            </span>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="accordion" style={{display: 'flex', flexDirection: 'row',}}>
                    <Accordion style={{marginLeft: 5}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{mr: 5}}>
                            Resources
                        </AccordionSummary>
                        <AccordionDetails>
                            <span onClick={handleResourcesClick}>
                            Resources Page
                            </span>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="profile" style={{marginLeft: 'auto', display: 'grid', paddingRight: 10}}>

                    <i className="fa-solid fa-guitar"
                       style={{fontSize: 35, marginLeft: 10, paddingBottom: 5}}>
                    </i>

                    <Button className="btn" variant="contained">
                        <ThemeProvider theme={fontTheme}>
                            <Typography variant='h6'
                                        onClick={handleProfileClick}>
                                Profile
                            </Typography>
                        </ThemeProvider>
                    </Button>

                </div>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
