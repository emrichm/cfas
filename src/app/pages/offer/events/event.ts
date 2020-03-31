export class Event {
    date: Date;
    description: string;
    image: {
        url: string;
        alt: string;
    }

    constructor(eventDTO: EventDTO) {
        this.date = new Date(eventDTO.date);
        this.description = eventDTO.description;
        this.image = eventDTO.image;
    }
}

export interface EventDTO {
    date: string;
    description: string;
    image: {
        url: string;
        alt: string;
    }
}