import React, { useState } from 'react';
import { Container, Stack, Typography  } from '@mui/material';

export default function RecentStatus() {
    const [recentStatus, setRecentStatus] = useState(null);
    
    window.electronAPI.onStatusReport((value) => {
        setRecentStatus(value);
    })

    if(recentStatus){
        return (
            <>                    
                <Container>
                    <Stack>
                        <Typography>
                            <strong>Last Checked:</strong> {recentStatus.checkDate}
                        </Typography>
                        <Typography>
                            <strong>Sites Down:</strong> {recentStatus.downMonitors}
                        </Typography>
                    </Stack>
                </Container>
            </>
        )
    }
}