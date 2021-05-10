import { Controller, Get, Redirect, Req, Param } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('websock')
export class WebsockController {
	@Get()
	@Redirect(`/${uuid()}`)
	async createRoom(): Promise< any > {
		return
	}

	@Get('/:room')
	async sendRoom( @Param('room') room: string, @Req() req:any ): Promise< any > {
		return { roomId: req.params.room }
	}

}
