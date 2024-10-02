export class FailResponseDto {
    success: boolean = false;
    message: string = '';
    errors: string[] = [];
    
    constructor(message: string, errors: string[]){
        this.message = message;
        this.errors = errors;
    }
}