/* eslint-disable */
import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService {
  signup(dto: AuthDto) {
    return {
      message: "hi sign up",
    };
  }

  signin() {
    return {
      message: "hi login",
    };
  }
}
