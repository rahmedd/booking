import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

// export type User = any;

@Injectable()
export class UsersService {
	private readonly users: User[];

	constructor(private prisma: PrismaService) {}
	
	async findOne(email: string): Promise<User | undefined> {
		
		const user = await this.prisma.user.findFirst({
			where: {
				email: email
			}
		})

		return user
	}
}
