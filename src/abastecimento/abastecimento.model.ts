import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Abastecimento extends Document {
    @Prop({ required: true, enum: ['Gasolina Comum', 'Gasolina Aditivada', 'Etanol', 'Diesel S10'] })
    tipoCombustivel: string;

    @Prop({ required: true, min: 0 })
    valorEmReais: number;

    @Prop({ required: true, min: 0 })
    quantidadeEmLitros: number;

    @Prop({ required: true, min: 0 })
    valorDoLitro: number;

    @Prop({ required: true })
    bico: string;

    @Prop({ required: true })
    nomeFrentista: string;

    @Prop({ default: () => new Date().toLocaleString('pt-BR') })
    dataHora: string;
}

export const AbastecimentoSchema = SchemaFactory.createForClass(Abastecimento);

// Método estático para criar e salvar um novo abastecimento
AbastecimentoSchema.statics.realizarAbastecimento = async function(dados: Partial<Abastecimento>) {
    const abastecimento = new this(dados);
    return await abastecimento.save();
};