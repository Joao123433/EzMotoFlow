import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class ApiExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
