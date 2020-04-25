export interface Wod {
    type: string;
    id: string;
    attributes: {
        created_at: string,
        scheduled_date_int: number,
        scheduled_date: string,
        track: {
            id: string,
            type: string,
            attributes_for: {
                created_at: string,
                name: string,
                type: string
            }
        },
        display_order: number,
        title: string,
        description: string,
        score_type: string,
        publish_at: string,
        is_published: boolean,
        movement_ids: string[]
    };
    links: {
        ui_results: string
    };
}

export interface Wods {
    data: Wod[];
    links: {
        self: string,
        ui_calendar: string
    };
}

export class WodsOverviewPerDay {
    wodDays: {
        scheduledDate: Date,
        wods: {
            displayOrder: number,
            title: string,
            descriptionLines: string[]
        }[];
    }[] = [];

    constructor(rawWods: Wods) {
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            const dailyWods = rawWods.data.filter(wod => {
                return (new Date(wod.attributes.scheduled_date).getDay() + 6) % 7 === dayOfWeek;
            });

            if (!dailyWods.length) {
                const today = new Date();
                const moSuDayOfWeek = (today.getDay() + 6) % 7;
                const missingDay = new Date(today.getTime() - ((moSuDayOfWeek - dayOfWeek) * 24 * 60 * 60 * 1000));

                this.wodDays.push({
                    scheduledDate: missingDay,
                    wods: [{
                        displayOrder: 1,
                        title: 'Kein WOD angegeben.',
                        descriptionLines: []
                    }]
                });
                continue;
            }

            const wods = [];

            dailyWods.forEach(dailyWod => {
                wods.push({
                    displayOrder: dailyWod.attributes.display_order,
                    title: dailyWod.attributes.title,
                    descriptionLines: dailyWod.attributes.description.split('\n')
                });
            });

            this.wodDays.push({
                scheduledDate: new Date(dailyWods[0].attributes.scheduled_date),
                wods
            });
        }
    }
}
