import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth-guard';
import { SessionGuard } from '../auth/session-guard';

import { UserService } from './user.service'

import { Prisma, User } from '@prisma/client'
import { CreateUserDTO } from '../DTO/user.dto'

@Controller('user')
export class UserController
{
	constructor (private readonly userService: UserService) {}

    @UseGuards(SessionAuthGuard)
    @Post('login')
    public async login(@Body() body, @Req() req)
	{
        return 'login';
    }

	@Post('register') // needs to be an unauthorized route
	async registerUser( @Body() req: CreateUserDTO ): Promise<User>
	{
		const user = await this.userService.register(req)
		delete user.password
		return user
	}

    @UseGuards(SessionGuard)
    @Get('me')
    public getProfile(@Request() req)
	{
        return req.user;
    }
}
