import React, { SetStateAction, useState } from 'react';
import { Container, Stack, Typography  } from '@mui/material';
import StatusReport from '../../../models/reports/status-report';

export default function RecentStatus() {
    const [recentStatus, setRecentStatus] = useState<StatusReport | null>(null);
    
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
    } else {
        return <></>
    }
}