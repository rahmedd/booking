import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { CustomRedisStore } from './auth/custom-redis-store.service';
import { ValidationPipe } from '@nestjs/common'

import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const redisStore = app.get(CustomRedisStore);

	app.useGlobalPipes(new ValidationPipe());
    app.use(session({
        store: redisStore,
        secret: 'example',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 8, // 8 hours
            sameSite: true,
            secure: false
        },
		unset: 'destroy',
		rolling: true,
    }));
    app.use(passport.initialize());
	app.use(passport.session());
	// app.use('/static', express.static(join(__dirname, '../public/')));

    await app.listen(3000);
}

bootstrap();
