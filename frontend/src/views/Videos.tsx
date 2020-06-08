import React from 'react';
import { Button } from 'antd';

import { getChannels } from '../lib/fetch/fetch';

export const Videos = () => {
    const getVideos = () => {
        getChannels();
    };

    return (
        <div>
            <h2>Videos</h2>

            <Button onClick={getVideos}>Get Channels</Button>
        </div>
    );
};
