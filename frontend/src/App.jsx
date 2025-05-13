import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import Home from "./components/Home.jsx";
import {ThemeProvider} from "@mui/material";
import Theme from "./components/ui/Theme.jsx";
import {Routes, Route} from "react-router-dom";
import Beginner from "./components/Beginner.jsx";
import Metalcore from "./components/Metalcore.jsx";
import Resources from "./components/Resources.jsx";
import Profile from "./components/Profile.jsx";


const App = () => {

    return (

        <>
            <ThemeProvider theme={Theme}>
                <ResponsiveAppBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Beginner" element={<Beginner/>} />
                    <Route path="/Metalcore" element={<Metalcore/>} />
                    <Route path="/Resources" element={<Resources/>} />
                    <Route path="/Profile" element={<Profile/>} />
                </Routes>
            </ThemeProvider>
        </>

    )
}

export default App;