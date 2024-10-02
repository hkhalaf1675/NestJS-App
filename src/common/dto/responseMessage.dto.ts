export class ResponseMessageDto<T>{
    message: string;
    errors: string[];
    success: boolean;
    data: T;

    constructor(message: string, errors: string[], success: boolean, data: T){
        this.message = message;
        this.errors = errors;
        this.success = success;
        this.data = data;
    }
}