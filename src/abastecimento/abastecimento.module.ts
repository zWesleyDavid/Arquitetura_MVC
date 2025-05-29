import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbastecimentoController } from './abastecimento.controller';
import { AbastecimentoSchema } from './abastecimento.model';
import { EmailModule } from '../email/email.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Abastecimento', schema: AbastecimentoSchema }]),
        EmailModule
    ],
    controllers: [AbastecimentoController],
})
export class AbastecimentoModule { }
