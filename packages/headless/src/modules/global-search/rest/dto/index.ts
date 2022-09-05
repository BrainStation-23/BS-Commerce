import type {IProductSearchResponse, IProductSearchSchema} from 'models' 

export class ISearchProductResponse implements IProductSearchResponse{
    resultsCount: number;
    values: IProductSearchSchema[];
    suggestion: string[];
}