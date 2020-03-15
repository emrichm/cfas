export interface Coach {
    name: string;
    position: string;
    teaser: string[];
    buttonText: string;
    image: {
        url: string;
        alt: string;
    };
    interview: Interview[];
    qualifications: string[];
}

export interface Interview {
    question: string;
    answer: string[];
}