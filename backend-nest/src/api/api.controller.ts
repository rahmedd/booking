import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { SessionGuard } from '../auth/session-guard';

import { ApiService } from './api.service'

import { Prisma, User } from '@prisma/client'

@Controller('api')
export class ApiController
{
	constructor (private readonly apiService: ApiService) {}

    @UseGuards(SessionGuard)
    @Get('me')
    public getProfile(@Request() req)
	{
        return req.user;
    }
}
