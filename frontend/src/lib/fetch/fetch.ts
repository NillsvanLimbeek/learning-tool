interface Channel {
    name: string;
    id: string;
}

const channels: Channel[] = [
    {
        name: 'Traversy Media',
        id: 'UC29ju8bIPH5as8OGnQzwJyA',
    },
    {
        name: 'The Net Ninja',
        id: 'UCW5YeuERMmlnqo4oq8vwUpg',
    },
    {
        name: 'FreeCodeCamp',
        id: 'UC8butISFwT-Wl7EV0hUK0BQ',
    },
];

export function getChannels() {
    const channelIds = channels.map((channel) => `id=${channel.id}&`).join('');
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&${channelIds}key=${process.env.REACT_APP_YT_API_KEY}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}
