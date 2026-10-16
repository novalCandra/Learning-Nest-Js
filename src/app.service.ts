import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  gethealth() {
    return {
      message: "okay",
      timeStampa: new Date,
      version: 1
    }
  }
}
