import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AdminRepository)
        private adminRepository: AdminRepository,
    ){}
}
