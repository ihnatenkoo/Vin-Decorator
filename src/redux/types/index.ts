export interface vinQueryResponse {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: Array<vinQueryResult>;
}

export interface vinQueryResult {
	Value: string | null;
	ValueId: string | null;
	Variable: string;
	VariableId: number;
}

interface ISearchVin {
	response: vinQueryResponse;
	isLoading: boolean;
	isError: boolean;
}
export interface IState {
	searchVin: ISearchVin;
	recentSearches: Array<vinQueryResponse>;
}
