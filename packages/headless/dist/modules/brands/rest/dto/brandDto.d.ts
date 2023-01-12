import { Brand } from '@bs-commerce/models';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';
export declare class BrandDto implements Brand {
    id: string;
    info: InfoDto;
    meta: MetaDto;
}
