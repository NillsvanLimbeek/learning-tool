export interface YTSearchListResponse<T> {
    etag: string;
    items: T[];
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    regionCode: string;
}

interface PageInfo {
    resultsPerPage: number;
    totalResults: number;
}

export interface YTChannel {
    etag: string;
    id: Id;
    kind: string;
    snippet: Snippet;
}

interface Id {
    channelId: string;
    kind: string;
}

interface Snippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: Thumbnails;
    title: string;
}

interface Thumbnails {
    default: Url;
    medium: Url;
    high: Url;
}

interface Url {
    url: string;
}
