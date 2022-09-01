import type {IProductSearchResponse, IProductSearchSchema, IProductSearchSuggestionResponse} from 'models' 

export class ISearchProductResponse implements IProductSearchResponse{
    resultsCount: number;
    values: IProductSearchSchema[];
    suggestion: string[];
}

export class ISuggestedProductResponse implements IProductSearchSuggestionResponse{
    resultsCount: number;
    values: string[];
}