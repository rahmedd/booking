import { Module } from '@nestjs/common';
import { UsersService } from './users-service';
import { CookieSerializer } from './auth/cookie-serializer';
import { SessionGuard } from './auth/session-guard';
import { SessionAuthGuard } from './auth/session-auth-guard';
import { AuthService } from './auth-service';
import { LocalStrategy } from './auth/local-strategy';
import { CustomRedisStore } from './auth/custom-redis-store.service';

import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [
		PrismaService,
        SessionAuthGuard,
        AuthService,
        UsersService,
        CookieSerializer,
        SessionGuard,
        LocalStrategy,
        CustomRedisStore,
    ],
})
export class AppModule {
}
