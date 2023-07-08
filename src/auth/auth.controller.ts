/* eslint-disable */
import { AuthService } from './auth.service';
import { Controller, Post } from "@nestjs/common";


@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  signup(){
    return 'I am signup'
  }

  @Post('signin')

  signin(){
    return ' I am sign in'
  }
 
}