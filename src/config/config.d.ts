export default interface IConfig {
    api: Api;
}

type Uri = {
    uri: string;
}

type Api = {
    jsonplaceholder: {
        baseURL: string,
        posts: Uri;
        albums: Uri;
        users: Uri;
    }
}