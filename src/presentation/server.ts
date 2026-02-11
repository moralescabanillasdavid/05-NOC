import { CheckService } from "../domain/use-cases/checks/check-service.js";
import { CronService } from "./cron/cron-service.js";


export class Server {
    public static start() {
        console.log('Server started...');

        CronService.createJob('*/5 * * * * *', () => {
            new CheckService(
                () => console.log('success'),
                (error) => console.log(error),
            ).execute('http://localhost:3000/posts')
        });

        
    }
}

