import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats/
  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return ' update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
