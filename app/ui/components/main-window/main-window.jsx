import React from 'react';
import { Box, Toolbar, AppBar, IconButton, Container, Stack, Typography, createTheme, ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ApiKeyForm from '../api-key-form/api-key-form';
import RecentStatus from '../recent-status/recent-status';

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
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}><MenuIcon></MenuIcon></IconButton>
                    <Typography variant="h5">
                        Uptime Notifier
                    </Typography>
                </Toolbar>
            </AppBar>
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