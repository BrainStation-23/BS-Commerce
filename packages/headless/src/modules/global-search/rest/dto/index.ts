import type {IProductSearchResponse, IProductSearchSchema, IProductSearchSuggestionResponse} from 'models' 

export class ISearchProductResponse implements IProductSearchResponse{
    totalItemsFound?: number;
	pageNumber?: number;
	limit?: number;
    products: IProductSearchSchema[];
}

export class ISuggestedProductResponse implements IProductSearchSuggestionResponse{
    resultsCount: number;
    values: string[];
}