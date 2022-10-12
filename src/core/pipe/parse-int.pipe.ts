import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    console.log(metadata.type);
    console.log(metadata.metatype);
    console.log(metadata.data);
    if (isNaN(val)) {
      console.log('参数类型错误');
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}