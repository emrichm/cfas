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
    }
}
