import { OnModuleInit } from '@nestjs/common';
import { ElasticHelperService } from './services/elastic.helper';
export declare class SearchModule implements OnModuleInit {
    private readonly helperService;
    constructor(helperService: ElasticHelperService);
    onModuleInit(): Promise<void>;
}
