import {Card, CardContent, ThemeProvider} from "@mui/material";
import * as React from "react";
import {CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import fontTheme from "./ui/FontTheme.jsx";

const Beginner = () => {

    return (

        <Stack spacing={50}>
            <ThemeProvider theme={fontTheme}>
                <Typography variant="h1" gutterBottom>
                    The Beginner Pathway
                </Typography>
            </ThemeProvider>

            <div className="beginnerOne">
                <Card elevation={20} sx={{width: 450, marginRight: '100px', marginTop: 0}}>
                    <CardMedia
                        sx={{height: 740}}
                        alt="geetar"
                        image="./src/assets/guitar-parts.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                Guitar Parts
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans'}}>
                            What's up my young grasshopper, welcome to the Beginner pathway. On this page, you will
                            learn guitar basics to help guide you on your
                            journey of becoming the greatest guitarist alive. We'll go over knowledge ranging from parts
                            of the
                            guitar to actual practical skills on playing the guitar. The image above shows all of the
                            basic
                            important parts to know when learning guitar and the correct terminology. Let's start with
                            guitar parts.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                    <CardContent>
                        <ThemeProvider theme={fontTheme}>
                            <Typography variant="h2" gutterBottom sx={{paddingTop: 1.25}}>
                                Guitar Parts Definitions
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 5}}>
                            Here I will list out vital nomenclature to the guitar... note that I will not go in depth to
                            every
                            single part of the guitar, but more explain the important ones to know.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Tuning Keys/Pegs: These tiny components, located on the headstock of your guitar, are used
                            for
                            tuning
                            your guitar to different tunings or to E standard.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Nut: This is the tiny portion between the headstock and the fretboard. It's purpose is to
                            help
                            hold
                            the strings in tact with the ridges engraved in it.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Fret Inlays: These are the metal bars you can see along the neck/fretboard of the guitar.
                            They
                            are
                            used to separate the frets.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Frets: These are the actual spaces between the fret inlays. This is where your actual finger
                            placement
                            will be when you play. Notice the dots (if you have any) along your fretboard, these are
                            called
                            fret markers and are usually marked along the 3rd, 5th, 7th, 9th, and 12th frets. They
                            visually
                            help to let
                            you know where you are playing.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Fretboard/Neck: This is the long portion of the guitar where the frets are and where your
                            hand
                            will
                            be moving up and down.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Body: The biggest hunk of wood where you rest on your thigh is known as the body. Notice the
                            curve
                            it has on the bottom of the body, that is where you can rest the guitar on your thigh.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Soundhole: The soundhole is the circle in the center of the body. Inside it is where the
                            vibrations
                            resonate and actually allow sound to be produced... do not get your picks stuck in there.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Bridge: This part is just below the soundhole on the bottom half of the body. It is used to
                            hold
                            the strings down using bridge pins.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={20} sx={{width: 450}}>
                    <CardMedia
                        sx={{height: 740}}
                        alt="peaceful meadow"
                        image="./src/assets/galandor-shredding.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography sx={{height: 200}} gutterBottom variant="h5">
                                My Boi Shredding
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans',}}>
                            This is you if you lock in...
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className='beginnerTwo'>
                <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                    <CardMedia
                        sx={{height: 640}}
                        alt="library"
                        image="./src/assets/galandor-library.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                Beginner Knowledge
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans'}}>
                            The following will be useful tips to know before playing. It will also include information I
                            believe beginner's should know before playing to make the experience of playing easier and
                            better. Feel free to take notes or do whatever helps you retain the information. Do not feel
                            overwhelmed if it is a lot of knowledge to remember, overtime you will begin to naturally
                            memorize
                            the fundamentals.

                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography variant="h2" gutterBottom sx={{paddingTop: 1.25}}>
                                General Knowledge
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 5}}>
                            I will begin with explaining the strings and their names: EADGBE. Looks random right... well
                            it
                            isn't.
                            In the music world, these letters are notes. More specifically, in the guitar world, these
                            notes
                            are the standard tuning for a 6-string guitar... aka: E Standard. A good way to remember
                            this
                            (starting top to bottom) is the acronym: Eddie Ate Dynamite Good Bye Eddy. Another common
                            way
                            guitarists reference the strings
                            and their order is with the numbers 1 - 6. With 6 being the low E (the top string, it is the
                            thickest
                            one) and 1 being the high e (the thinnest string, it is furthest from you). They are called
                            low
                            or
                            high based on their pitch not their placement. Reference resources to see how to tune your
                            guitar.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            Now that you know the strings, their name, and their order, let's talk about where exactly
                            to
                            place
                            your fingers in order to produce the best sound. This is the practical part, it might hurt
                            your
                            hand and fingers at first, but over time those small motor movements will become easier.
                            Your
                            hand
                            will grow to to be more flexible along with your fingers having better dexterity. If you are
                            a
                            righty,
                            then your right hand will be your strumming hand and your left hand your chord hand. It is
                            the
                            opposite
                            for leftys. Let's go over the chord hand first, since most find getting down the technique
                            for
                            that
                            hand more challenging. With this hand you want to avoid having flat fingers on your strings,
                            this
                            will cause muted strings and not as much sound being produced. Think of your hand as a lego
                            hand.
                            Utilize your thumb as a pivot point... you should apply forward pressure with it slightly.
                            As
                            for
                            the rest of your fingers, avoid having your nails touch any of the strings and push down on
                            the
                            strings
                            with your fingertips. Try and place your finger as close to the corresponding fret inlay,
                            it's
                            easier to push down on the string that way and causes less fatigue in the fingers.
                        </Typography>
                    </CardContent>
                </Card>


                <Card elevation={20} sx={{width: 450}}>
                    <CardContent>
                        <ThemeProvider theme={fontTheme}>
                            <Typography variant="h2" gutterBottom sx={{paddingTop: 1.25}}>
                                Knowledge Continued
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 5}}>
                            Combine the forward push of your thumb, the pushing from your fingertips on the strings, and
                            you
                            should have enough pressure on the strings to produce a good sounding note. It is crucial to
                            maintain
                            that lego hand shape to prevent any mute sounding strings. It is also important to make sure
                            to
                            be pushing down the strings with your fingertips and not have your nails interfering.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            As for the strumming hand, focus on using your nails sort of "dragging" their way down the
                            strings.
                            This is known as a downstroke. On the way back up, your thumbnail should "drag" it's way up
                            against
                            the strings. This is known as the upstroke. Some guitarist also refer to them as downstrums
                            and
                            upstrums.
                            If you are using a pick, grasp it between your thumb and the middle knuckle of your index
                            finger.
                            Have the pointy part of the pick be the part strumming the guitar, the larger end of the
                            pick
                            should
                            be the part being gripped in order to hold it easier. If that placement feels too loose, try
                            moving
                            the pick more up along your index finger. You should also be trying to place your thumb firm
                            on
                            it
                            and somewhere along half of the pick should be covered by your thumb for good grip.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            I want you to practice maintaining the lego hand, proper finger placement, and correct
                            strumming
                            form.
                            Focus on playing the notes without getting a buzz sound or a muted sound. Proper form will
                            be
                            crucial
                            to improving in the future. I recommend plucking string by string to find where the buzz or
                            muted sound
                            is located and then fixing it
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25}}>
                            NOTE: This is a lot of information and I get that visual aids would be beneficial. I will be
                            providing
                            links in the resources tab to video instructions on the topics I go over. I will also add
                            titles
                            above the links so that way you know which one to click on.
                        </Typography>
                    </CardContent>
                </Card>

            </div>

            <div className='beginnerThree'>
                <Card elevation={20} sx={{width: 450, marginRight: '100px'}}>
                    <CardMedia
                        sx={{height: 640}}
                        alt="peaceful meadow"
                        image="./src/assets/galandor-playing.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                Tablature (Tabs)
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans'}}>
                            Typically in music, people learn to read sheet music so they can sight read when they play.
                            While this is available for guitarists as well, a large portion of guitarists prefer to read
                            tabs instead. This is because for guitarists there is more than one way to play any note
                            that is
                            usually not specified on sheet music.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={20} sx={{width: 800, marginRight: '100px'}}>
                    <CardMedia
                        sx={{height: 640}}
                        alt="tablature"
                        image="./src/assets/tabs-vs-sheet.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                Sheets vs Tabs
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans'}}>
                            As you can see above, the top portion (sheet music) is showing typical notes that you learn
                            from
                            studying music, but does not specify which octave. A pianist can assume middle C or the
                            sheet
                            music will define the start at the beginning of the piece, but for guitarists, there is no
                            specified
                            start. Since there are various ways to play a simple C major note, sheet music can turn out
                            to be
                            tedious to use. In comparison to the bottom portion (tabs), the numbers tell you
                            specifically
                            which fret to play on and which string as well (the lowest line will be the 6th string and
                            the top most
                            line the 1st string). Once you understand the fretboard further along, you will know which
                            letter note you are playing. Eventually, you will also probably be able to tell which note
                            it
                            is or what key you are in by the sound of the pitch.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className='beginnerFour'>
                <Card elevation={20} sx={{width: 800, marginRight: '100px'}}>
                    <CardMedia
                        sx={{height: 640}}
                        alt="avenged sevenfold lol"
                        image="./src/assets/galandor-synyster.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                Scales and Warmup Exercises
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans'}}>
                            Great job following along, we've covered quite a bit on the fundamentals. For this next
                            section,
                            we're going to talk about warmups and exercises to help improve your finger movements and
                            hand
                            flexibility. We will also incorporate scales in order to develop some relative pitch for
                            your
                            ears
                            over time. This will also help you to begin understanding how to read tabs. I will briefly
                            explain scales,
                            not too much because that is more music theory and an entirely
                            different topic to study, but I will be touching on them a bit in order for you to
                            understand what a
                            scale is exactly.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans'}}>

                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={20} sx={{width: 450}}>
                    <CardContent>
                        <ThemeProvider theme={fontTheme}>
                            <Typography variant="h2" gutterBottom sx={{paddingTop: 1.25}}>
                                Scales and Warmup Exercises Explained
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 5}}>
                            Below I will leave a simple G major scale for you to reference and practice along with.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 1.25}}>
                            Think of a scale as a staircase, you can go up and go down. A major scale will contain a
                            root
                            note
                            and always want to resolve to that root note. There are different scales with different
                            sounds
                            and purposes,
                            but we will not go in depth about that because it is intermediate and even advanced level
                            stuff.
                            We will instead specifically be using
                            the G major scale due to it's simplicity.
                            It will be a good exercise for your fingers as well as a good
                            warmup while you are beginner level.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 1.25}}>
                            When exercising this scale, try to avoid only using one finger to play each note. Instead,
                            try
                            and
                            use your four fingers (pointer, middle, ring, and pinky). This helps develop muscle memory
                            to
                            using
                            all your fingers instead of focusing on training only one to be good.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingBottom: 1.25, paddingTop: 1.25}}>
                            Exercise wise, if you learn this scale and get comfortable with it, you will be able to play
                            other songs
                            that are in the key of G major. This is because a lot of songs are just scales that mix
                            around
                            the
                            notes to get their unique melody. Songs also being in the same key work the same way. A very
                            good
                            example for this scale is 'La Bamba' by Ritchie Valens. I will link a youtube video for
                            learning
                            it
                            in the resources page, but I highly suggest learning this song's main riff. You'll notice
                            how
                            similar
                            the riff is to the scale. Learning this song is also a good beginner exercise because it
                            moves
                            your fingers
                            up and down the strings at a moderate pace allowing you to develop that muscle memory.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className='beginnerFive'>
                <Card elevation={20} sx={{width: 1500}}>
                    <CardMedia
                        sx={{height: 640}}
                        alt="g major scale"
                        image="./src/assets/g-major-scale.jpg"
                    />
                    <CardContent>

                        <ThemeProvider theme={fontTheme}>
                            <Typography gutterBottom variant="h5">
                                G Major Scale Exercise
                            </Typography>
                        </ThemeProvider>

                        <Typography sx={{fontFamily: 'Gill sans'}}>
                            The notes in red are all G major, the root note of this scale. They will sound different due
                            to
                            them being in different octaves changing their pitch. Do not worry to much about the notes
                            in
                            between the red G majors... that goes into music theory and right now you should focus more
                            on
                            developing your skill to play comfortably before exciting yourself with the deep world of
                            music.
                            A cool fun fact I will tell you is that every note before another red note (G major) will
                            sound like
                            it has a bit of suspense to it. Pay attention to those final notes before playing the root
                            again and
                            you will hear how it sounds like it needs to play another note, like a cliffhanger almost.
                            This
                            is because of what I mentioned earlier, the note wants to resolve to the root note (G
                            major).
                            If you specifically want to hear this, play 2 4 5 on the D string and it will stand out
                            more.
                        </Typography>

                        <Typography sx={{fontFamily: 'Gill sans', paddingTop: 1.5}}>
                            As I said before, focus on incorporating all four of your fingers instead of just using one.
                            Make sure to apply the proper hand and finger forms in order to get a good ring to the note.
                            The more you practice good form, the faster you will develop muscle memory for good
                            technique.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Stack>

    )
}

export default Beginner;