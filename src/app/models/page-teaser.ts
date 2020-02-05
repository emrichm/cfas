export interface PageTeaser {
    title: string;
    paragraphs: string[];
    button: {
        text: string;
        link: string;
    };
    image: {
        url: string;
        alt: string;
    };
}
