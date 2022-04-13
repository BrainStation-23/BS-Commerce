import { BadRequestException, Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response, response } from 'express';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private UserService: UserService, private jwtService: JwtService) {}

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }

    async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
        const { name, email, password } = user;

        const existingUser = await this.UserService.findByEmail(email);

        if(existingUser) throw new BadRequestException('User already exists');;;

        const hashedPassword = await this.hashPassword(password);

        const newUser = await this.UserService.create(name, email, hashedPassword);
        return this.UserService._getUserDetails(newUser);
    }
    
    async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    async validateUser(email: string, password: string): Promise<UserDetails | null> {
        const user = await this.UserService.findByEmail(email);
        const doesUserExist = !!user;

        if(!doesUserExist) return null;
        
        const doesPasswordMatch = await this.doesPasswordMatch(password, user.password);

        if(!doesPasswordMatch) return null;

        return this.UserService._getUserDetails(user);
    }

    async login(existingUser: ExistingUserDTO, response: Response): Promise<{token: string, user: object} | null> {
        const { email, password } = existingUser;
        const user = await this.validateUser(email, password);
        
        if(!user) {
            throw new BadRequestException('invalid credentials');
        };

        const jwt = await this.jwtService.signAsync({ user });
        response.cookie('jwt', jwt, {httpOnly: true});

        const loggedInUser = user;

        return { token: jwt, user: loggedInUser };
    }

    async logout(response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }
}
