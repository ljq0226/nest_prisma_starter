import { ConfigService } from '@nestjs/config';
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ParseIntPipe } from './core/pipe/parse-int.pipe';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
  ) { }

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number): string {
    // console.log(process.env.TEST_APP);
    // console.log(this.config.get('TEST_APP'));
    return this.appService.getHello();
  }
}
