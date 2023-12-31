import React from "react";
import {RecoilRoot} from "recoil";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";

import HomePage from "../pages/HomePage";

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[500]
        },
        secondary: {
            main: grey[600]
        }
    }
});

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <HomePage/>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
