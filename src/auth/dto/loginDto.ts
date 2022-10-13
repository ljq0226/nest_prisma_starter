import { isNotEmpty, isString } from "class-validator";

export class LoginDto {
  username: string;
  password: string;
}
