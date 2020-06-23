import React from 'react';
import { Button } from 'antd';

import { getChannels, searchForChannels } from '../../lib/fetch/fetch';

export const Videos = () => {
    const getVideos = () => {
        getChannels();
    };

    const searchVideos = () => {
        searchForChannels();
    };

    return (
        <div>
            <h2>Videos</h2>

            <Button onClick={getVideos}>Get Channels</Button>
            <Button onClick={searchVideos}>Search Channels</Button>
        </div>
    );
};
