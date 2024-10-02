export class SuccessResponseDto {
    success: boolean = true;
    message: string = '';
    data: any = null;
    
    constructor(message: string, data: any){
        this.message = message;
        this.data = data;
    }
}