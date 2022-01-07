import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWelcome(): string {
    return '<b>Farm Delite Backend App</b>\n Farm delite - Our aim is to bridge the gaps in the agricultural value chain, required to make a successful transaction.'
  }
}
