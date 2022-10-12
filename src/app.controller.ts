import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ParseIntPipe } from './core/pipe/parse-int.pipe';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getHello(@Param('id', new ParseIntPipe()) id: number): string {
    console.log(id);
    return this.appService.getHello();
  }
}
