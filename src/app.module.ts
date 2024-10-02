import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/config/typeOrm.configService';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { BcryptModule } from './common/service/bcyrpt/bcrypt.module';
import { AdminsModule } from './modules/admins/admins.module';
import { PostModule } from './modules/post/post.module';
import { PostReactModule } from './modules/post-react/post-react.module';
import { PostCommentModule } from './modules/post-comment/post-comment.module';
import { SaveListModule } from './modules/save-list/save-list.module';
import { SaveListPostModule } from './modules/save-list-post/save-list-post.module';
import { CategoryModule } from './modules/category/category.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.get<any>('jwt')
      },
      global: true
    }),
    BcryptModule,
    UsersModule,
    RolesModule,
    AuthModule,
    AdminsModule,
    PostModule,
    PostReactModule,
    PostCommentModule,
    SaveListModule,
    SaveListPostModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {}
