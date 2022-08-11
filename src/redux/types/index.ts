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

export interface IState {
	searchVin: ISearchVin;
}

interface ISearchVin {
	response: vinQueryResponse;
	isLoading: boolean;
	isError: boolean;
}
