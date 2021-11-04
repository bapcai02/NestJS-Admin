export function IBaseResponse(status: number, message: string, data: any) {
   const result = {
        status: status, 
        message: message,
        data: data
   }
   return result;
}