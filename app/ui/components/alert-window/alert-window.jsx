import React, { useState } from 'react';
import { Box, Stack, Typography, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    spacing: 8,
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

export default function AlertWindow() {
    const [report, setReport] = useState(null);

    window.electronAPI.onDowntimeReport((value) => {
        setReport(value);
    })

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'error.main' }}>
                <Box sx={{ mx: 3, px: 4, bgcolor: '#FFF'}}>
                    <Typography variant="h5">
                        <strong>                        
                            Down Warning
                        </strong>
                    </Typography>
                    {!report &&
                        <Typography>
                            Generating Report...
                        </Typography>
                    }
                    {report &&
                        <Stack spacing={2}>
                            <Typography variant="h6">
                                Sites Down:
                            </Typography>
                            {report.map((monitor) =>
                                <Typography>
                                    <strong>{monitor}</strong>
                                </Typography>
                            )}
                        </Stack>}
                </Box>
            </Box>
        </ThemeProvider>
    )
}