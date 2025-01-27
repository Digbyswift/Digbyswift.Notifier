import React, { useState } from 'react';

export default function RecentStatus() {
    const [recentStatus, setRecentStatus] = useState(null);
    
    window.electronAPI.onStatusReport((value) => {
        const statusElement = document.getElementById('recent-status');
        setRecentStatus(value);
        statusElement.innerHTML = recentStatus;
    })

    return (
        <>                    
            <div id="recent-status">
            </div>
        </>
    )
}