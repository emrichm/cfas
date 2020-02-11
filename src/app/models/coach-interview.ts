import { Coach, Interview } from './coach';

export class CoachInterview {
    name: string;
    position: string;
    image: {
        url: string;
        alt: string;
    };
    interview: Interview[];
    qualifications: string[];

    constructor(coach: Coach) {
        Object.assign(this, coach);
        this.image.url = this.image.url.split('.')[0] + '300x300.' + this.image.url.split('.')[1];
    }
}