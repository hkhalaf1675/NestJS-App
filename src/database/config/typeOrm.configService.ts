import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory{
    constructor(
        private readonly configService: ConfigService
    )
    {}

    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        
        console.log(this.configService.get('databaseConfig'));
        console.log('----------------------------');
        
        return this.configService.get<any>('databaseConfig');
    }
}