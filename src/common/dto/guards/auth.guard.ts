import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { ResponseMessageDto } from "../responseMessage.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    )
    {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        
        const token = this.extractTokenFromHeader(request);

        if(!token){
            throw new UnauthorizedException(new ResponseMessageDto(
                'Unauthorized User',
                ['Unauthorized User'],
                false,
                null
            ));
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: this.configService.get<string>('database.secret')
                }
            );

            console.log(payload);
            request['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException(new ResponseMessageDto(
                'Unauthorized User',
                ['Unauthorized User'],
                false,
                null
            ));
        }

        return true;
    }

    private extractTokenFromHeader(request: Request){
        const [type, token] = request.headers?.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;
    }
}