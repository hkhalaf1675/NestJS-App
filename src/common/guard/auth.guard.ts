import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { FailResponseDto } from "../dto/failResponse.dto";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    )
    {}

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if(!token && token === undefined || token === null){
            throw new UnauthorizedException(new FailResponseDto(
                'Unauthorized User!',
                ['Unauthorized User!']
            ));
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: this.configService.get<string>('jwt.secret')
                }
            );
            request['user'] = payload;
            console.log(payload);
            
        } catch (error) {
            throw new UnauthorizedException(new FailResponseDto(
                'Unauthorized User!',
                ['Unauthorized User!']
            ));
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string|undefined{
        const [type, token] = request.headers?.authorization?.split(' ') ?? [];

        if(type === 'Bearer'){
            return token;
        }
        else{
            return undefined;
        }
    }
}