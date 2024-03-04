export interface ResponseInterface<T>{
    data: T;
    message: string;
    IsSucess: boolean;
}