/* eslint-disable */
import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  signup() {
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
