export class PagnationResponseDto {
    success: boolean = true;
    pageInfo: any = {
        totalItems: 0,
        totalPages: 0,
        currentPage: 0
    };
    data: any[] = [];
    constructor(pageInfo: any, data: any[]){
        this.pageInfo = pageInfo;
        this.data = data;
    }
}