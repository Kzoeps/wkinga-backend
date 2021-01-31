import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AdminRepository)
        private adminRepository: AdminRepository,
    ){}

    signUp(authCredentialsDto: AuthCredentialsDto):Promise<void>{
        return this.adminRepository.signUp(authCredentialsDto);
    }
}
