import {Card, CardContent, ThemeProvider} from "@mui/material";
import fontTheme from "./ui/FontTheme.jsx";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import * as React from "react";


const Metalcore = () => {

    return (

        <Stack spacing={50}>

            <ThemeProvider theme={fontTheme}>
                <Typography variant="h1">
                    The Metalcore Pathway
                </Typography>
            </ThemeProvider>

            <div className="metalcoreOne">
            {/*<ThemeProvider theme="h5">*/}
            {/*    <Typography>*/}
            {/*        Stuck in the early 2000's huh... me too :(*/}
            {/*    </Typography>*/}
            {/*</ThemeProvider>*/}
                <Card elevation={20} sx={{width: 450}}>
                    {/*<CardMedia*/}
                    {/*    sx={{height: 740}}*/}
                    {/*    alt="geetar"*/}
                    {/*    image="./src/assets/guitar-parts.jpg"*/}
                    {/*/>*/}
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                Stuck in the early 2000's huh... me too :(
                            </Typography>
                        </ThemeProvider>

                        {/*<Typography sx={{fontFamily: 'Gill sans'}}>*/}
                        {/*    What's up my young grasshopper, welcome to the Beginner pathway. On this page, you will*/}
                        {/*    learn guitar basics to help guide you on your*/}
                        {/*    journey of becoming the greatest guitarist alive. We'll go over knowledge ranging from parts*/}
                        {/*    of the*/}
                        {/*    guitar to actual practical skills on playing the guitar. The image above shows all of the*/}
                        {/*    basic*/}
                        {/*    important parts to know when learning guitar and the correct terminology. Let's start with*/}
                        {/*    guitar parts.*/}
                        {/*</Typography>*/}
                    </CardContent>
                </Card>

            </div>


        </Stack>
    )
}

export default Metalcore;