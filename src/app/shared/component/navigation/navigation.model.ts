export interface Navigation {
    title: string;
    type?: string;
    url?: string;
    icon?: any;
    children?: Navigation[];
    [key: string]: any;
}