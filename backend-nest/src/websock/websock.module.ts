import { Module } from '@nestjs/common';
import { WebsockGateway } from './websock.gateway'
import { WebsockController } from './websock.controller';
import { WebsockService } from './websock.service';

@Module({
	providers: [ WebsockGateway, WebsockService ],
	controllers: [WebsockController]
})
export class WebsockModule {}
