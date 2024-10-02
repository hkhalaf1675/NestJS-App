import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class BcryptService{
    async hash(value: string): Promise<string>{
        const salt = await bcrypt.genSalt(10);

        return await bcrypt.hash(value, salt);
    }

    async compare(value: string, hash: string): Promise<boolean>{
        return bcrypt.compare(value, hash);
    }
}