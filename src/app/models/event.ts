export interface Event {
    date: string;
    time: string;
    description: string;
}

export interface EventMonth {
    month: string;
    image: {
        url: string;
        alt: string;
    }
    events: Event[];
}