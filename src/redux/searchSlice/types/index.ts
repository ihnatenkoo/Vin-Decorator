export interface IVinResponse {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: Array<IVinResult>;
}

export interface IVinResult {
	Value: string | null;
	ValueId: string | null;
	Variable: string;
	VariableId: number;
}

export interface IState {
	searchVin: IVinResponse;
	recentSearches: Array<IVinResponse>;
	isLoading: boolean;
	isError: boolean;
}
