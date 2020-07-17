export interface User {
    _id: string,
    name: string,
    username: string,
    email: string
}

export interface Song{
    _id: String
    name: String
    external_url: String
    image: String
    release_date: String
    duration_ms: String
    popularity: String
    like: Boolean
    artists: Artist
}

export interface Artist{
    _id: String
    href: String
    name: String
}

export interface DateCustom{
    year: String
    month: String
    day: String
}

export interface Album{
    id: number
    name: String
    image: String
    like: number
}

