import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

import { User } from '@prisma/client'

@Injectable()
export class UserService 
{
	constructor(private prisma: PrismaService) {}

	async register(userReq: User): Promise<User> 
	{
		try 
		{
			const user = await this.prisma.user.create(
			{
				data: userReq
			})

			delete user.password // remove password

			return user
		}
		catch (err)
		{
			if (err.code === 'P2002')
			{
				const message = 'Error creating user, user already exists'
				throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR)
			}

			throw new HttpException('internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}
}
