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
        await admin.save();

    }
}