import React, { useState } from 'react';
import { Button, Box, Container, Stack, Typography } from '@mui/material';

export default function ApiKeyForm() {
    const [showForm, setShowForm] = useState(false);

    window.electronAPI.onNoKey(() => {
        setShowForm(false);
    })

    function submitKey() {
        const element : HTMLInputElement | HTMLElement | null = document.getElementById('api-key-field');

        if(element instanceof HTMLInputElement && element?.value){
            let value = element.value;
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
                        <Stack spacing={2}>
                            <Typography>
                                This application is now performing regular background checks to Uptime Robot and will display an alert
                                window if any down sites are reported.
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={resetKey}>
                                <Typography>
                                    Clear API key
                                </Typography>
                            </Button>
                        </Stack>
                    }
                </Stack>
            </Container>
        </>
    )
}