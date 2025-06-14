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

const ProfilePage = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [option, setOption] = useState('');
    const [interest, setInterest] = useState('');
    const [submittedProfile, setSubmittedProfile] = useState(null);

    React.useEffect(() => {
        const storedProfile = localStorage.getItem('submittedProfile');
        if (storedProfile) {
            setSubmittedProfile(JSON.parse(storedProfile));
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const profileData = {
            name: name,
            age: parseInt(age),
            option: option,
            interestsEntity: {
                interestType: interest.charAt(0).toUpperCase() + interest.slice(1)
            }
        };

        try {
            console.log(profileData);
            const response = await axios.post('http://localhost:8080' + '/api/users', profileData);
            console.log('ProfilePage created:', response.data);
            localStorage.setItem('submittedProfile', JSON.stringify(response.data));
            setSubmittedProfile(response.data);
            setName('');
            setAge('');
            setOption('');
            setInterest('');
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
                                       onChange={e => setName(e.target.value)} required/>
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
                                    <FormControlLabel value="yes" control={<Radio color='secondary'/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio color='secondary'/>} label="No"/>
                                    <FormControlLabel value="perchance" control={<Radio color='secondary'/>}
                                                      label="Perchance"/>
                                </RadioGroup>

                                <ThemeProvider theme={fontTheme}>
                                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{paddingTop: 5}}>
                                        <Typography variant="h5">
                                            Most Interested In...
                                        </Typography>
                                    </FormLabel>
                                </ThemeProvider>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={interest}
                                    onChange={(e) => setInterest(e.target.value)}
                                >
                                    <FormControlLabel value="acoustic" control={<Radio color='secondary'/>}
                                                      label="Acoustic"/>
                                    <FormControlLabel value="electric" control={<Radio color='secondary'/>}
                                                      label="Electric"/>
                                    <FormControlLabel value="both" control={<Radio color='secondary'/>}
                                                      label="Both"/>
                                </RadioGroup>
                            </FormControl>
                            <button style={{width: '100%', backgroundColor: '#e0d8c3'}} type="submit">Submit
                            </button>
                        </form>
                    </CardContent>
                </Card>

                {submittedProfile && (
                    <Card elevation={10} sx={{width: 550, height: 'responsive', backgroundColor: '#f5f5f5'}}>
                        <ThemeProvider theme={fontTheme}>
                            <CardContent>
                                <Typography variant="h3" sx={{paddingBottom: 5}}>
                                    Le Young Wizard Stats:
                                </Typography>
                                <Typography variant="h5" sx={{paddingBottom: 5}}>
                                    Name: {submittedProfile.name}
                                </Typography>
                                <Typography variant="h5" sx={{paddingBottom: 5}}>
                                    Age: {submittedProfile.age}
                                </Typography>
                                <Typography variant="h5" sx={{paddingBottom: 5}}>
                                    Noob: {submittedProfile.option}
                                </Typography>

                                <button
                                    onClick={() => {
                                        console.log('Editing profile:', submittedProfile);
                                        setName(submittedProfile.name);
                                        setAge(submittedProfile.age.toString());
                                        setOption(submittedProfile.option);
                                        setInterest(submittedProfile.interestsEntity?.interestType.toLowerCase() || '');
                                        localStorage.removeItem('submittedProfile');
                                        setSubmittedProfile(null);
                                    }}
                                    style={{backgroundColor: '#e0d8c3'}}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={async () => {
                                        console.log("Profile deleted")

                                        await axios.delete(`http://localhost:8080/api/users/${submittedProfile.id}`);
                                        localStorage.removeItem('submittedProfile');
                                        setSubmittedProfile(null);
                                    }}
                                    style={{marginLeft: '1rem', backgroundColor: '#e0d8c3'}}
                                >
                                    Delete
                                </button>

                            </CardContent>
                        </ThemeProvider>
                    </Card>
                )}

            </div>
        </Stack>
    );
};

export default ProfilePage;