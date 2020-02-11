import { Coach } from './coach';

export class CoachTeaser {
    name: string;
    teaser: string[];
    buttonText: string;
    image: {
        url: string;
        alt: string;
    };

    constructor(coach: Coach) {
        Object.assign(this, coach);
    }
}
