import * as mongoose from 'mongoose';

export const AbastecimentoSchema = new mongoose.Schema({
    tipoCombustivel: {
        type: String,
        enum: ['Gasolina Comum', 'Gasolina Aditivada', 'Etanol', 'Diesel S10'],
        required: true
    },
    valorEmReais: { type: Number, required: true },
    quantidadeEmLitros: { type: Number, required: true },
    valorDoLitro: { type: Number, required: true },
    dataHora: {
        type: String, default: () => {
            return new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        }
    },
    bico: { type: String, required: true },
    nomeFrentista: { type: String, required: true },
});

AbastecimentoSchema.pre('save', function (next) {
    if (this.dataHora) {
        const data = new Date(this.dataHora);
        this.dataHora = data.toLocaleString('pt-BR', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'America/Sao_Paulo'
        });
    }
    next();
});

AbastecimentoSchema.statics.realizarAbastecimento = async function (dados: Partial<Abastecimento>) {
    const abastecimento = new this(dados);
    return await abastecimento.save();
};

export interface Abastecimento extends mongoose.Document {
    tipoCombustivel: string;
    valorEmReais: number;
    quantidadeEmLitros: number;
    valorDoLitro: number;
    dataHora: string;
    bico: string;
    nomeFrentista: string;
}

export interface AbastecimentoModel extends mongoose.Model<Abastecimento> {
    realizarAbastecimento(dados: any): Promise<Abastecimento>;
}

AbastecimentoSchema.statics.realizarAbastecimento = async function (dados: any) {
    const abastecimento = new this(dados);
    return await abastecimento.save();
};

export const AbastecimentoModel = mongoose.model<Abastecimento, AbastecimentoModel>('Abastecimento', AbastecimentoSchema);