import React from 'react'
import './steamuser.css'

export default function SteamUser() {
    return (
        <div>
            <div className='title-steamuser'>Concurrent Steam Users:</div>
            <div className='detail-steamuser'>(most recent 48 hours)</div>

            <div className='circle1'></div>
            <div className='circlename1'>current</div>
            <div className='current-users'>24,709,428</div>

            <div className='circle2'></div>
            <div className='circlename2'>peak</div>
            <div className='peak-users'>28,481,344</div>
        </div>
    );
};