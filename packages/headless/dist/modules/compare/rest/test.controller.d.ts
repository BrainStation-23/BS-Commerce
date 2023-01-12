import { Response } from 'express';
import { User } from '../../../entity/user';
import { CompareDataDto, CompareResponse } from './dto/test.dto';
import { CompareTestService } from '../services/test.service';
export declare class CompareTestController {
    private compareService;
    constructor(compareService: CompareTestService);
    getCompareByUserId(user: User, res: Response): Promise<CompareResponse<CompareDataDto>>;
    getCompare(user: User, res: Response): Promise<CompareResponse<boolean>>;
}
