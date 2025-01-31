import React, { useState } from 'react';
import { Badge, Box, Drawer, Toolbar, Stack, AppBar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export default function AppBarComponent() {
    const [downMonitors, setDownMonitors] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    window.electronAPI.onStatusReport((value) => {
        setDownMonitors(value);
    })

    return (
        <>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Stack sx={{ p: 2, px:2, bgcolor: "primary.main", height: "100%" }}>
                    <Typography variant="subtitle1" sx={{color: "#fff"}}>
                        <strong>Options</strong>
                    </Typography>
                </Stack>
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setDrawerOpen(true)}
                    >
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
                        sx={{ mr: 2 }}
                    >
                        <Badge badgeContent={downMonitors} color="secondary">
                            <MonitorHeartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>

    )
}