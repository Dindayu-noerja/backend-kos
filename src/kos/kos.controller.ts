import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { KosService } from './kos.service';

@Controller('kos')
export class KosController {

  constructor(private kosService: KosService) {}

  @Get()
  findAll() {
    return this.kosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.kosService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.kosService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kosService.remove(Number(id));
  }
}