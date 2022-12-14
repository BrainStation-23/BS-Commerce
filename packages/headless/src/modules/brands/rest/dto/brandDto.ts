import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Brand } from '@bs-commerce/models';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';
import { ValidateNested as CustomValidator } from '../../../../decorators/service.validator';

export class BrandDto implements Brand {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ type: InfoDto })
  @IsNotEmpty()
  @CustomValidator(InfoDto)
  @IsObject()
  info: InfoDto;

  @ApiProperty({ type: MetaDto })
  @CustomValidator(MetaDto)
  @IsObject()
  meta: MetaDto;
}
