declare module jph {
    type Post = {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    type PostInput = {
        userId?: number;
        title?: string;
        body?: string;
    }
}