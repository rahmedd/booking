import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth-guard';
import { SessionGuard } from '../auth/session-guard';

import { UserService } from './user.service'

import { User } from '@prisma/client'

@Controller('api')
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
	async registerUser( @Body() req: User ): Promise<User>
	{
		const user = await this.userService.register(req)
		return user
	}

    @UseGuards(SessionGuard)
    @Get('me')
    public getProfile(@Request() req)
	{
        return req.user;
    }
}
