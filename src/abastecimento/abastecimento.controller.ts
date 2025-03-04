import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Abastecimento } from './abastecimento.model';

@Controller('abastecimentos')
export class AbastecimentoController {
    constructor(
        @InjectModel('Abastecimento') private readonly abastecimentoModel: Model<Abastecimento>,
    ) { }

    @Post('simular')
    async simularAbastecimento(@Body() dadosAbastecimento: Partial<Abastecimento>) {
        const novoAbastecimento = await this.abastecimentoModel['realizarAbastecimento'](dadosAbastecimento);
        return { mensagem: 'Abastecimento realizado com sucesso!', registro: novoAbastecimento };
    }

    @Get()
    async listarAbastecimentos() {
        const abastecimentos = await this.abastecimentoModel.find().exec();
        return abastecimentos;
    }

    @Get(':id')
    async obterAbastecimento(@Param('id') id: string) {
        const abastecimento = await this.abastecimentoModel.findById(id).exec();
        return abastecimento;
    }
}
