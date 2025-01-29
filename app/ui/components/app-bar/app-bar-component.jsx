import React, { useState } from 'react';
import { Badge, Toolbar, AppBar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export default function AppBarComponent() {
    const [downMonitors, setDownMonitors] = useState(0);


    window.electronAPI.onStatusReport((value) => {
        setDownMonitors(value);
    })
    
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <MenuIcon>
                    </MenuIcon>
                </IconButton>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Uptime Notifier
                </Typography>
                <IconButton size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <Badge badgeContent={downMonitors.downMonitors} color="secondary">
                        <MonitorHeartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}