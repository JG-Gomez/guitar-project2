import * as React from 'react';
import Stack from '@mui/material/Stack';
import {Grid} from "@mui/joy";
import {Card, CardContent, CardMedia, ThemeProvider} from "@mui/material";
import fontTheme from "./ui/FontTheme.jsx";
import Typography from "@mui/material/Typography";

export default function SquareCorners() {
    return (

        <Grid direction="row">

            <Stack spacing={50}>

                <ThemeProvider theme={fontTheme}>
                    <Typography variant="h1">
                        Welcome to the Grimoire
                    </Typography>
                </ThemeProvider>

                <div className="topCards">
                    <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                        <CardContent>
                            <ThemeProvider theme={fontTheme}>
                                <Typography variant="h5" sx={{paddingBottom: 1.5}}>
                                    About Galandor's Guitar
                                </Typography>
                            </ThemeProvider>
                            <Typography sx={{fontFamily: 'Gill sans'}}>
                                Welcome to the Galandor's Beginner
                                Guitar Course. Here you'll learn the basics about playing guitar and build a
                                foundation to get you pointed in the direction for your guitar journey. I'll be
                                referencing techniques personally used to help me improve when I started out and
                                also talk about other material that will prove beneficial. I'm no teacher and
                                everyone learns different, stay consistent with practice and it'll pay off sooner
                                than you realize.
                            </Typography>
                            <CardMedia
                                sx={{height: 450, paddingTop: 5}}
                                component="img"
                                alt="wizard"
                                height="140"
                                image="./src/assets/wizard-light-fantasy.jpg"
                            />
                        </CardContent>
                    </Card>


                    <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                        <CardContent>
                            <ThemeProvider theme={fontTheme}>
                                <Typography variant="h5" sx={{paddingBottom: 1.5}}>
                                    Galandor's Course Continued...
                                </Typography>
                            </ThemeProvider>

                            <Typography sx={{fontFamily: 'Gill sans'}}>
                                The website will be split into learning
                                based
                                on your level of playing and/or the style of playing you'd want to learn. As said
                                before, I'm
                                not
                                a teacher, so the style will be limited knowledge to the styles I play the most and am
                                comfortable
                                teaching. The beginner page will be going over the fundamentals and whatnot, while the
                                style
                                will
                                go more in depth on specific techniques for that specific style of playing. Choose which
                                page to
                                head to first, dive in, and have fun !
                            </Typography>
                            <CardMedia
                                sx={{height: 450, paddingTop: 5}}
                                component="img"
                                alt="wizard"
                                height="140"
                                image="./src/assets/galandor-teaching.jpg"
                            />
                        </CardContent>
                    </Card>
                    <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                        <CardContent>
                            <ThemeProvider theme={fontTheme}>
                                <Typography variant="h5" sx={{paddingBottom: 1.5}}>
                                    Galandor's Journey So Far...
                                </Typography>
                            </ThemeProvider>
                            <Typography sx={{fontFamily: 'Gill sans'}}>
                                Over my 6ish years of slaying dragons and playing guitar, I've found many practicing
                                methods
                                that
                                I'll
                                be sharing with you to see which is most optimal for you. I learned primarily through
                                tabs and
                                by sound, so reading actual music is one thing I will not be able to teach. I will talk
                                more
                                about this on the beginner page and as to why most guitar players actually prefer to use
                                tabs
                                over
                                sheet music. I will make sure to share some youtubers that helped me
                                learn songs I wanted to play.
                            </Typography>
                            <CardMedia
                                sx={{height: 450, paddingTop: 5}}
                                component="img"
                                alt="fight scene"
                                height="140"
                                image="./src/assets/galandor-dragon.jpg"
                            />
                        </CardContent>
                    </Card>

                    <Card elevation={20} sx={{width: 450}}>
                        <CardContent>
                            <ThemeProvider theme={fontTheme}>
                                <Typography variant="h5" sx={{paddingBottom: 1.5}}>
                                    Final Thoughts From Galandor
                                </Typography>
                            </ThemeProvider>
                            <Typography sx={{fontFamily: 'Gill sans'}}>
                                Take it from somebody who didn't want anything to do with music - I
                                believe
                                you too could learn to play on any guitar you pick up. Although in the start it might
                                be hard
                                to get the fundamentals down, with due practice and time, you'll be at a beginner
                                level before you know it. Playing guitar is a practical skill, meaning that you need to
                                actually
                                apply what is learned and practice it in order to progress. As long as you follow this
                                guide,
                                you'll have a hobby you can use for the rest of your life!
                            </Typography>
                            <CardMedia
                                sx={{height: 450, paddingTop: 5}}
                                component="img"
                                alt="wizard"
                                height="140"
                                image="./src/assets/galandor-views.jpg"
                            />
                        </CardContent>
                    </Card>
                </div>
            </Stack>
        </Grid>
    );
}
