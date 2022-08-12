export interface IVariablesResponse {
	Count: number;
	Message: string;
	SearchCriteria: null;
	Results: Array<IVariablesResult>;
}

export interface IVariablesResult {
	DataType: string;
	Description: string;
	GroupName: string | null;
	ID: number;
	Name: string;
}

export interface IState {
	variables: IVariablesResponse;
	isLoading: boolean;
	isError: boolean;
}
