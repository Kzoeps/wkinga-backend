import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import {EntityRepository, Repository} from 'typeorm';
import {Admin} from './admin.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        const {email, password} = authCredentialsDto;
        const admin = new Admin();
        admin.email = email;
        admin.password = password;
        try{
            await admin.save();
        }catch(error){
            if(error.code === '23505'){
                throw new ConflictException('Email already exists');
            } else{
                throw new InternalServerErrorException();
            }
        }
    }
}