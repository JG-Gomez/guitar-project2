import {Card, CardContent, ThemeProvider} from "@mui/material";
import fontTheme from "./ui/FontTheme.jsx";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";


const Resources = () => {

    return (

        <Stack spacing={50}>

            <div className="resourcesYt">
                <Card elevation={20} sx={{width: 850, height: 'responsive'}}>
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h1">
                                Useful Resources
                            </Typography>

                        </ThemeProvider>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h3" sx={{paddingTop: 5, paddingBottom: 1.5}}>
                                Marty Schwartz
                            </Typography>
                        </ThemeProvider>

                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/HNSaXAe8tyg?si=ytZBkbraswOSlR3y"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>

                        <Typography sx={{fontFamily: 'Gill sans', paddingTop: 1.5}}>
                            The very first youtuber I watched to learn guitar was Marty Schwartz. He has tons of
                            beginner
                            songs along with free lessons and does a very good job at explaining everything from
                            techniques
                            to knowledge. Till this day, sometimes I'll go back on his page to see if there's a song I'd
                            like to learn. Overall, very solid start for learning guitar from square one.
                        </Typography>

                    </CardContent>

                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h3" sx={{paddingTop: 5, paddingBottom: 1.5}}>
                                Guitar Zero 2 Hero
                            </Typography>
                        </ThemeProvider>

                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/aqH9HNrAveg?si=FilFl498OtiheEug"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>

                        <Typography sx={{fontFamily: 'Gill sans', paddingTop: 1.5}}>
                            I started watching guitar hero 2 zero once I began to understand the guitar more. In most of
                            his videos he will put tabs along with what he is playing, which I found very useful. He also
                            tells you the tuning for the song he teaches and shows tabs on the strings letter notes for the
                            tuning. He is great if you like to take learning slower and want some visuals thrown in there too.
                            Although he isn't a "beginner" type of teacher, he does teach a variety of beginner songs and tries
                            simplifying some of them as well. I highly recommend checking this channel out if you want to get
                            better at tab reading.
                        </Typography>

                    </CardContent>


                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h3" sx={{paddingTop: 5, paddingBottom: 1.5}}>
                                Carl Brown
                            </Typography>
                        </ThemeProvider>

                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/tjmdW6PUFY4?si=gDjHNacb1FfaCrzE"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>

                        <Typography sx={{fontFamily: 'Gill sans', paddingTop: 1.5}}>
                            Guitar lessons 365 (Carl Brown) is a slightly more intermediate level channel, but I threw it in here
                            anyway in case you feel you're at that level. He does not teach the basics, he sort of has an
                            experienced guitarist following, so he'll mainly teach songs note by note. I still watched him as
                            a beginner to try and see what level I felt I was at. I'd specifically watch the hour long Bat Country
                            lesson by Avenged Sevenfold as a "checkpoint" every few weeks. Every time I'd go back and visit
                            that lesson, it would seem less complicated. This channel is a good resource if you're looking for
                            slow, in-depth, note by note lessons on a song you'd want to learn.
                        </Typography>

                    </CardContent>

                </Card>
            </div>

        </Stack>
    )
}

export default Resources;