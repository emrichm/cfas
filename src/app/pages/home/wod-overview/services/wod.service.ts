import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wods, WodsOverviewPerDay } from '../models/wod';

@Injectable({
  providedIn: 'root',
})
export class WodService {
  wods$: Observable<WodsOverviewPerDay>;

  constructor(private http: HttpClient) { }

  get wodList(): Observable<WodsOverviewPerDay> {
    if (!this.wods$) {
      this.wods$ = this.fetchWods();
    }

    return this.wods$;
  }

  fetchWods(): Observable<WodsOverviewPerDay> {
    const dates = this.createDatesOfCurrentWeek();

    if (environment.production) {
      return this.http.get('./assets/static/php/get-wods.php?dates=' + dates)
        .pipe(map((wods: Wods) => new WodsOverviewPerDay(wods)));
    } else {
      return this.fetchWodsFake();
    }
  }

  createDatesOfCurrentWeek(): string {
    const today = new Date();
    const moSuDayOfWeek = (today.getDay() + 6) % 7;
    const monday = new Date(today.getTime() - (moSuDayOfWeek * 24 * 60 * 60 * 1000));
    const sunday = new Date(today.getTime() + ((6 - moSuDayOfWeek) * 24 * 60 * 60 * 1000));

    let dates = '';
    let tmp = '';
    // from
    dates = dates.concat(monday.getFullYear().toString());
    tmp = (monday.getMonth() + 1).toString();
    dates = dates.concat(tmp.length === 1 ? '0' + tmp : tmp);
    tmp = monday.getDate().toString();
    dates = dates.concat(tmp.length === 1 ? '0' + tmp : tmp);

    dates = dates.concat('-');

    // to
    dates = dates.concat(sunday.getFullYear().toString());
    tmp = (sunday.getMonth() + 1).toString();
    dates = dates.concat(tmp.length === 1 ? '0' + tmp : tmp);
    tmp = sunday.getDate().toString();
    dates = dates.concat(tmp.length === 1 ? '0' + tmp : tmp);

    return dates;
  }

  fetchWodsFake(): Observable<WodsOverviewPerDay> {
    return of(new WodsOverviewPerDay({
      data: [
        {
          type: 'workouts',
          id: 'DZYzqHMBqg',
          attributes: {
            created_at: '2020-03-17T16:12:18.605Z',
            scheduled_date_int: 20200323,
            scheduled_date: '2020-03-23T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 1,
            title: 'HomeWOD \'Peaceful SEVEN\'',
            // tslint:disable-next-line: max-line-length
            description: `5 Minute Jump or Run\n\nEvery Movement for 10:\nActive Samson\nLunges Rotate\nInchworm\nKneeTaps\n\nWOD:\n7 Rounds of:\n7 Rucksack/DB/KB Front Squats\n7 Burpees\n7 V-Ups\n7 Pistols\n7 Shoulder Taps\n7 Jumping AirSquats\n7 SitUps\n\nCoolDown: 2 Minutes each\nChilds Pose\nSilvias Gedächtnisstrangulierung ;)`,
            score_type: 'Time',
            publish_at: '2020-03-22T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'Q45eeXwOvG',
              'c94XVoGakB',
              'umWlFaYtSo',
              'QCUOoOtogo',
              'hJS94DdaBx',
              'yJIlK7TN6q',
              'Dt930JgbP8',
              'Y8GAfTQjlS',
              'h79jyMSEM4',
              'dmbpU1OMjd'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/DZYzqHMBqg/results'
          }
        },
        {
          type: 'workouts',
          id: '7ZWGxcRRKi',
          attributes: {
            created_at: '2020-03-21T12:13:03.211Z',
            scheduled_date_int: 20200324,
            scheduled_date: '2020-03-24T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 1,
            title: '\'Tic Tac Go\'',
            // tslint:disable-next-line: max-line-length
            description: `\'Tic Tac Go\'\nAMRAP 25:\n10 Air Squats + 400m Run\n20 Air Squats + 400m Run\n30 Air Squats + 400m Run\nContinue to add (10) squats per round\n\nStimulus\nWorking through a longer 25 minute workout today\nAfter each run we'll add 10 reps to our Air Squats\nOur score today will be the amount of Air Squats we complete plus however many reps we get into the next round\nFor ease let's count the run as 4 reps for the full 400m run (300=3, 200=2, 100=1) * For Example *\nIf you finish the round of 40 Air Squats + the 400m Run and get 10 squats into the next round your score will be 44+10\nWarm-Up\n2-3 Sets\n200m Run\n15 Glute Bridges Video\n15 Knuckle DragsVideo`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-23T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'Q45eeXwOvG',
              'fQG7uhGbq8',
              'yJIlK7TN6q'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/7ZWGxcRRKi/results'
          }
        },
        {
          type: 'workouts',
          id: 'hkTMGFGBSp',
          attributes: {
            created_at: '2020-03-21T12:13:27.896Z',
            scheduled_date_int: 20200324,
            scheduled_date: '2020-03-24T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 2,
            title: '\'Tic Tac Go\' - No Running version',
            // tslint:disable-next-line: max-line-length
            description: `\'Tic-Tac-Go\' (No Running Version)\nFor Time: \n10 Air Squats + 50 Double-Unders\n20 Air Squats + 50 Double-Unders\n30 Air Squats + 50 Double-Unders\n40 Air Squats + 50 Double-Unders\n50 Air Squats + 50 Double-Unders\n60 Air Squats + 50 Double-Unders\n70 Air Squats + 50 Double-Unders\n\nStimulus\nWorking through a longer workout today we expect this to take between 25-35 Minutes\nLet\'s think about breaking up the double unders from the beginning into manageable sets\n* Break- up Options*\n* 25- 25\n * 30 - 20\n * 20 - 20 - 10\n * 10 - 10 - 10 - 10 - 10\nTry and find a pace on the air squats that will allow you to keep moving\nYour score today will be time of completion\nWarm - Up\n2 - 3 Sets\n20 Single Jumps\n15 Glute Bridges Video\n15 Knuckle DragsVideo`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-23T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'Q45eeXwOvG',
              'fQG7uhGbq8',
              'h9vPo5JYw6',
              'yJIlK7TN6q'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/hkTMGFGBSp/results'
          }
        },
        {
          type: 'workouts',
          id: 'CIuc2xDvGJ',
          attributes: {
            created_at: '2020-03-21T12:14:18.390Z',
            scheduled_date_int: 20200325,
            scheduled_date: '2020-03-25T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 1,
            title: '\'32-Pack\'',
            // tslint:disable-next-line: max-line-length
            description: `\'32-Pack\'\nTabata:\nSingle Arm Plank\nGlute Bridges\nSingle Arm Plank\nFlutter Kicks\n\n*Single Arm plank alternates on each interval (right hand up, left leg up, then opposite on the next)\n\nStimulus\nWe'll work through all 8 tabata rounds of a movement before moving on to the next movements\nA tabata is: 20 Seconds of work: 10 of rest\nYou'll spend 4 Minutes at each station\nYou will have 4 scores for this workout, one for each movement\nTotal workout time is 16 Minutes\nWarm-up\n2-3 Sets\n5 Inchworms Video\n30 Second Hollow Hold Video\n5 Shoulder TapsVideo \n30 Second Arch Hold Video`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-24T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'fQG7uhGbq8',
              '1cZx24hUB0',
              'Dt930JgbP8'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/CIuc2xDvGJ/results'
          }
        },
        {
          type: 'workouts',
          id: 'wDn6AKpwKA',
          attributes: {
            created_at: '2020-03-21T12:21:34.809Z',
            scheduled_date_int: 20200326,
            scheduled_date: '2020-03-26T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 1,
            title: '\'TWO\'',
            // tslint:disable-next-line: max-line-length
            description: `WOD 1:\n40 - 30 - 20 - 10\nBurpees \nV-ups or. Sit ups\n\nWOD 2:\nAMRAP 18\n30 Mountain Climbers\n30 alt. Lunges    \n15 push ups \n10 side planks (pro seite)\n\n\nWarmUp: Such dir etwas stabiles zum hochsteigen (Stuhl, Kiste, Treppen)\n5 Runden\n10 StepUps\n10 PushUps etwas erhöht\n10 Lateral StepUps links\n10 lateral StepUps rechts\n\nCool-Down\n5-10 Minuten Spazieren gehen oder hinlegen, Beine hochlegen 8 Sekunden einatmen (durch die Nase) 10 Sekunden ausatmen (durch den Mund)`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-25T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'c94XVoGakB',
              '9iu4RgWSgi',
              'yJIlK7TN6q',
              '8AUAYBnHEW',
              'Y8GAfTQjlS',
              'h79jyMSEM4',
              'dmbpU1OMjd'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/wDn6AKpwKA/results'
          }
        },
        {
          type: 'workouts',
          id: 'eabUkBYgD3',
          attributes: {
            created_at: '2020-03-21T12:29:26.942Z',
            scheduled_date_int: 20200327,
            scheduled_date: '2020-03-27T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 1,
            title: '\'SALLY WHERE?\' ;) & \'Corona FRAN\'',
            // tslint:disable-next-line: max-line-length
            description: `Warm-Up: \nFor 4 Rounds 1 Minute each\nDoubleUnder Jumps or Jumping with clapping hands on Hips (for DU practice)\n30/30 Hollow Rocks/Arch Rocks\nGood Mornings\n\nFind Song \'Flowers\' from Moby and have Fun:\nWe are doing Plank ups and downs, starting in a high Plank. one arm is moving to bottom Plank, other is following and back up.\nSally down > going down\nSally up > going up \n\n\'Corona FRAN\'\n\n20min Amrap \n\n10 Overheadsquat* \n10 Chair Pull ups* \n\nAfter each Round 30 Double Unders \n\nEquipment: \n\nOHS: use Towel or any Stick\nChair Pull: lay below Chair, Pull up to Chest\n\nScales: \nPull up: Push ups\nDouble Unders: 60 SU or 60 Jumping Jack\n\n\nCool-Down:\n4 Minutes each\nPidgeon Stretch\nChildsPose\nSquat Hold`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-26T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              '8OZDlHAExp',
              'lDpU5192WQ',
              'h9vPo5JYw6',
              'XavuhsO1R0',
              'iSu93oACwo',
              'Zsg2tpPwwB'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/eabUkBYgD3/results'
          }
        },
        {
          type: 'workouts',
          id: '4C8n7phAQQ',
          attributes: {
            created_at: '2020-03-21T12:30:49.689Z',
            scheduled_date_int: 20200328,
            scheduled_date: '2020-03-28T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 1,
            title: '\'Garage Fight\' with equipment',
            // tslint:disable-next-line: max-line-length
            description: `\'Garage Fight\'\n3 Rounds of 1:00 Minute at Each:\nDumbbell Goblet Thrusters\nSingle Dumbbell Power Cleans\nHops over the Dumbbell\nSingle Arm Push Presses\nBurpees\nRest\n\nStimulus\nIn today's 17 minute workout we'll work through 5 different movements and a resting station\nThe goal is to keep consistent rep counts throughout the duration of the workout\nWe have a couple of options when it comes to pacing this workout\n* Choose a pace that will allow good movement quality for each 1 Minute station\n-OR-\n* Choose a rep count that you can sustain through this 17 minute workout\nLet's try to move through the entire minute at each station\nWe'll keep 3 separate scores for each round, SugarWOD will add them up for a sum total for the leaderboard\nMovement Videos\nDB Goblet ThrustersVideo\n\nWarm-Up\n3 Sets\n5 DB Strict Press- light weight (Each Side) \n10 Lateral Stair Steps(Each Side)\n15 AbMat Sit-ups \n20 Air Squats`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-27T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'Q45eeXwOvG',
              'c94XVoGakB',
              'AV3ZJImwt6',
              '3P3ydRmt3z',
              '32fORzP45M',
              '9iI9OsXVAX',
              'FrQGIrNfi8',
              'O8xUgMBLOp',
              'Y8GAfTQjlS',
              'e1XFB3PF7Q',
              'sZOLntZRGl'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/4C8n7phAQQ/results'
          }
        },
        {
          type: 'workouts',
          id: 'fMXHG1R0ZN',
          attributes: {
            created_at: '2020-03-21T12:31:12.144Z',
            scheduled_date_int: 20200328,
            scheduled_date: '2020-03-28T00:00:00.000Z',
            track: {
              id: 'GcLH3DKOFg',
              type: 'tracks',
              attributes_for: {
                created_at: '2019-07-09T00:19:07.985Z',
                name: 'Workout of the Day',
                type: 'public'
              }
            },
            display_order: 2,
            title: '\'Garage Fight\' with equipment',
            // tslint:disable-next-line: max-line-length
            description: `\'Garage Fight\' (No Equipment Version)\n3 Rounds of 1:00 Minute at Each:\nOdd-Object Thrusters\nOdd-Object Cleans\nHops over Odd-Object\nOdd-Object Reverse Lunges\nBurpees\nRest\n\nHow to create an Odd-ObjectVideo\n\nStimulus\nIn today's 17 minute workout we'll work through 5 different movements and a resting station\nThe goal is to keep consistent rep counts throughout the duration of the workout\nWe have a couple of options when it comes to pacing this workout\n* Choose a pace that will allow good movement quality for each 1 Minute station\n-OR-\n* Choose a rep count that you can sustain through this 17 minute workout\nLet's try to move through the entire minute at each station\nWe'll keep 3 separate scores for each round, SugarWOD will add them up for a sum total for the leaderboard\nMovement Videos\nOdd-Object ThurstersVideo\nOdd-Object CleansVideo\n\nWarm-Up\n3 Sets\n5 DB Strict Press- light weight (Each Side) \n10 Lateral Stair Steps(Each Side)\n15 AbMat Sit-ups \n20 Air Squats`,
            score_type: 'Rounds + Reps',
            publish_at: '2020-03-27T19:00:00.000Z',
            is_published: true,
            movement_ids: [
              'Q45eeXwOvG',
              'Pfe6N82u2K',
              'c94XVoGakB',
              'AV3ZJImwt6',
              'O8xUgMBLOp',
              'Y8GAfTQjlS',
              'e1XFB3PF7Q',
              'sZOLntZRGl',
              'dmbpU1OMjd'
            ]
          },
          links: {
            ui_results: 'https://app.sugarwod.com/workouts/fMXHG1R0ZN/results'
          }
        },
      ],
      links: {
        self: 'https://api.sugarwod.com/v2/workouts?dates=20200322-20200329',
        ui_calendar: 'https://app.sugarwod.com/workouts/calendar?week=20200322'
      }
    }));
  }
}
