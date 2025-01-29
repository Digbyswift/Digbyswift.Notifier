import React from 'react';
import { Box, Container, Stack, createTheme, ThemeProvider } from '@mui/material';
import ApiKeyForm from '../api-key-form/api-key-form';
import RecentStatus from '../recent-status/recent-status';
import AppBarComponent from '../app-bar/app-bar-component';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#221d4b',
        },
        secondary: {
            main: '#F9007F',
        },
        text: {
            secondary: '#221d4b',
        },
        info: {
            main: '#F9007F',
        },
    },
    typography: {
        fontFamily: [
            "europa", "sans-serif"
        ]
    }
})

export default function MainWindow() {

    return (
        <ThemeProvider theme={theme}>
            <AppBarComponent/>
            <Box sx={{ m: 3 }}></Box>
            <Container maxWidth='sm'>
                <div className="main-body">
                    <div id="main-column">
                        <Stack direct="column" spacing={1}>
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img id="logo-image" width="250" src="../extraResources/ds-logo.png" />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" />
                            <ApiKeyForm />
                            <RecentStatus />
                        </Stack>
                    </div>
                </div>
            </Container>
        </ThemeProvider>)
}