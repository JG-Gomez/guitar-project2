import {createTheme} from "@mui/material";


const fontTheme = createTheme({
    typography: {
        h1: {
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '4.2em',
            color: '#f0e6d2'
        },
        h2: {
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '3.2em',
            color: '#f0e6d2'
        },

        h3: {
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '2.2em',
            color: '#f0e6d2'
        },

        h5: {
            fontFamily: 'cursive',
            fontStyle: 'italic',
            color: '#f0e6d2'
        },

        h6: {
            fontFamily: 'cursive',
            fontStyle: 'italic',
            fontSize: '1.2em',
            color: '#f0e6d2'
        }
    }
})

export default fontTheme;