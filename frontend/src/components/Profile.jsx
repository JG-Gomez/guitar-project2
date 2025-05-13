import * as React from "react";
import {Card, CardContent, FormControlLabel, ThemeProvider} from "@mui/material";
import fontTheme from "./ui/FontTheme.jsx";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import Stack from "@mui/material/Stack";
import {FormLabel} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import axios from "axios";


const Profile = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const profileData = {
            name: name,
            age: parseInt(age),
            option: option
        };

        try {
            console.log(profileData);
            const response = await axios.post('http://localhost:8080' + '/api/users', profileData);
            console.log('Profile created:', response.data);
            setName('');
            setAge('');
            setOption('');
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };


    return (

        <Stack spacing={50}>

            <ThemeProvider theme={fontTheme}>
                <Typography variant="h1">
                    Become a Wizard ?
                </Typography>
            </ThemeProvider>

            <div className="userForm">
                <Card elevation={20} sx={{width: 850, height: 'responsive'}}>
                    <CardContent>
                        <ThemeProvider theme={fontTheme}>
                            <Typography variant="h2" sx={{paddingBottom: 5}}>
                                Enter Your Info Below...
                            </Typography>
                        </ThemeProvider>

                        <form onSubmit={handleSubmit} style={{display: 'grid', justifyContent: 'center'}}>
                            <label style={{paddingBottom: 20}}>
                                <ThemeProvider theme={fontTheme}>
                                    <Typography sx={{paddingBottom: 0.5}} variant="h5">
                                        Your Name:
                                    </Typography>
                                </ThemeProvider>
                                <input type="text"
                                       name="name"
                                       placeholder="Wizard's name here"
                                       value={name}
                                       onChange={e => setName(e.target.value)} required />
                            </label>
                            <label style={{paddingBottom: 50}}>
                                <ThemeProvider theme={fontTheme}>
                                    <Typography sx={{paddingBottom: 1}} variant="h5">
                                        Age:
                                    </Typography>
                                </ThemeProvider>
                                <input type="number"
                                       name="age"
                                       value={age}
                                       onChange={e => setAge(e.target.value)} required/>
                            </label>

                            <FormControl sx={{paddingBottom: 2.5}}>
                                <ThemeProvider theme={fontTheme}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">
                                        <Typography variant="h5">
                                            First Time Learning?
                                        </Typography>
                                    </FormLabel>
                                </ThemeProvider>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={option}
                                    onChange={(e) => setOption(e.target.value)}
                                >
                                    <FormControlLabel value="yes" control={<Radio color= 'secondary' />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color= 'secondary' />} label="No"/>
                                    <FormControlLabel value="other" control={<Radio color= 'secondary' />} label="Perchance"/>
                                </RadioGroup>
                            </FormControl>
                            <button style={{width: '100%', backgroundColor: '#e0d8c3'}} type="submit">Submit</button>
                        </form>
                    </CardContent>
                </Card>
            </div>

        </Stack>
    )
}

export default Profile;