import React, { useState } from 'react';
import { Button, Box, Container, Stack, Typography, createTheme, ThemeProvider } from '@mui/material';

export default function ApiKeyForm() {
    const [showForm, setShowForm] = useState(false);
    const [report, setReport] = useState(null);

    window.electronAPI.onDowntimeReport((value) => {
        setReport(value);
    })


    window.electronAPI.onNoKey(() => {
        setShowForm(false);
    })

    function submitKey() {
        const value = document.getElementById('api-key-field').value;

        if (value) {
            window.electronAPI.submitKey(value);
            setShowForm(false);
        }
    }

    function resetKey() {
        window.electronAPI.clearApiKey();
        setShowForm(true);
    }

    return (
        <>
            <Container>
                <Stack>
                    {showForm &&
                        <Box>
                            <div id="api-form" className="hidden">
                                <Stack direction="row" spacing={2}>
                                    <Typography>
                                        Enter API Key:
                                    </Typography>
                                    <input id="api-key-field" type="text" />
                                    <Button variant="contained" color="secondary" onClick={submitKey}>
                                        <Typography>
                                            Submit
                                        </Typography>
                                    </Button>
                                </Stack>
                            </div>

                        </Box>

                    }
                    {
                        !showForm &&
                        <>
                            <div id="reporting-message">
                                <Typography>
                                    This application is now performing regular background checks to Uptime Robot and will display an alert
                                    window if any down sites are reported.
                                </Typography>
                            </div>
                            <Button variant="contained" color="secondary" onClick={resetKey}>
                                <Typography>
                                    Clear API key
                                </Typography>
                            </Button>
                        </>
                    }
                </Stack>
            </Container>
        </>
    )
}