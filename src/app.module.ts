import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbastecimentoModule } from './abastecimento/abastecimento.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/auditloop'),
    AbastecimentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
