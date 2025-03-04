import * as mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { AbastecimentoModel } from './abastecimento.model';

describe('Abastecimento Model', () => {
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    afterEach(async () => {
        await AbastecimentoModel.deleteMany({});
    });

    it('deve salvar um abastecimento com data formatada corretamente', async () => {
        const dados = {
            tipoCombustivel: 'Gasolina Comum',
            valorEmReais: 100.0,
            quantidadeEmLitros: 20.0,
            valorDoLitro: 5.0,
            bico: 'Bico 1',
            nomeFrentista: 'João da Silva',
        };

        const registro = await AbastecimentoModel.realizarAbastecimento(dados);
        expect(registro).toBeDefined();

        const regexData = /^\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}$/;
        expect(registro.dataHora).toMatch(regexData);
    });

    it('deve lançar erro ao faltar campo obrigatório', async () => {
        const dadosIncompletos = {
            tipoCombustivel: 'Gasolina Comum',
            valorEmReais: 100.0,
        };

        await expect(AbastecimentoModel.realizarAbastecimento(dadosIncompletos)).rejects.toThrow();
    });
});
