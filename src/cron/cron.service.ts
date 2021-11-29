import { Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class CronService {
    constructor(private schedulerRegistry: SchedulerRegistry){}

    @Cron('* * * * * *')
    triggerCronJob() {
      console.log("Calling the method every second");
    }
}
