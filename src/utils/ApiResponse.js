class ApiResponse{
    constructor(statusCode, data, messag= "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
        
}