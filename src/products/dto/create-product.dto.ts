import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @Type(() => Number)
  public price: number;
}
