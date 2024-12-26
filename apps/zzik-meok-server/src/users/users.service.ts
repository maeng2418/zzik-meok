import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  getHello() {
    return { data: { message: 'Hello World!' } }
  }
}
