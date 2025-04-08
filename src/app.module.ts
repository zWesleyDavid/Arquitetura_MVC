import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbastecimentoModule } from './abastecimento/abastecimento.module';
import { EmailModule } from './email/email.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/auditloop', {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
    }),
    AbastecimentoModule,
    EmailModule,
    LogModule, // Adicionado o módulo de logs
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}