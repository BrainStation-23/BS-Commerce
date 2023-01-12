import { CompareDataDto, CompareResponse } from '../rest/dto/test.dto';
import { CompareRepository } from '../repositories';
export declare class CompareTestService {
    private compareRepository;
    constructor(compareRepository: CompareRepository);
    getCompareByUserId(userId: string): Promise<CompareResponse<CompareDataDto>>;
    getCompare(userId: string): Promise<CompareResponse<boolean>>;
}
