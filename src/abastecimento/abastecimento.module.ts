import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbastecimentoController } from './abastecimento.controller';
import { AbastecimentoSchema } from './abastecimento.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Abastecimento', schema: AbastecimentoSchema }])
    ],
    controllers: [AbastecimentoController],
})
export class AbastecimentoModule { }
