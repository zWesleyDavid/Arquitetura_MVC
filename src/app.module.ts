import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbastecimentoModule } from './abastecimento/abastecimento.module';
import { EmailModule } from './email/email.module';
import { Logger } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/auditloop', {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
    }),
    AbastecimentoModule,
    EmailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
