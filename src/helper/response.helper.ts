import { Injectable } from '@nestjs/common';
@Injectable()
export class BaseResponse {
   IBaseResponse(status: number, message: string, data: any) {
      const result = {
         status: status ? status : "1", 
         message: message ? message : "The server is under maintenance, please try again later",
         data: data ? data : []
      }
      return result;
   }
}