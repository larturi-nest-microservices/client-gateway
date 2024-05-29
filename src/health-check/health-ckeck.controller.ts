import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HelthCkeckController {
  @Get()
  healthCheck(): string {
    return 'Client Gateway service is up and running!';
  }
}
