export class Event {
    date: Date;
    expDate: Date;
    description: string;
    image: {
        url: string;
        alt: string;
    }

    constructor(eventDTO: EventDTO) {
        this.date = new Date(eventDTO.date);
        this.expDate = new Date(eventDTO.expDate);
        this.description = eventDTO.description;
        this.image = eventDTO.image;
    }
}

export interface EventDTO {
    date: string;
    expDate: string;
    description: string;
    image: {
        url: string;
        alt: string;
    }
}