import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

import { Prisma, User } from '@prisma/client'
import { CreateUserDTO } from '../DTO/user.dto'

@Injectable()
export class ApiService 
{
	constructor(private prisma: PrismaService) {}


}
