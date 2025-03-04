// src/abastecimento/abastecimento.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AbastecimentoController } from './abastecimento.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Abastecimento } from './abastecimento.model';

describe('AbastecimentoController', () => {
  let controller: AbastecimentoController;
  let model: Model<Abastecimento>;

  // Mock de um registro de abastecimento
  const mockAbastecimento = {
    _id: 'algumId',
    tipoCombustivel: 'Gasolina Comum',
    valorEmReais: 100.0,
    quantidadeEmLitros: 20.0,
    valorDoLitro: 5.0,
    dataHora: '01/01/2023, 12:00:00',
    bico: 'Bico 1',
    nomeFrentista: 'João da Silva',
  };

  // Criação de um mock para o modelo do Mongoose
  const abastecimentoModelMock = {
    // Simula o método estático para criação do abastecimento
    realizarAbastecimento: jest.fn().mockResolvedValue(mockAbastecimento),
    find: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue([mockAbastecimento]),
    }),
    findById: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockAbastecimento),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbastecimentoController],
      providers: [
        {
          provide: getModelToken('Abastecimento'),
          useValue: abastecimentoModelMock,
        },
      ],
    }).compile();

    controller = module.get<AbastecimentoController>(AbastecimentoController);
    model = module.get<Model<Abastecimento>>(getModelToken('Abastecimento'));
  });

  it('deve simular um abastecimento', async () => {
    const dados = {
      tipoCombustivel: 'Gasolina Comum',
      valorEmReais: 100.0,
      quantidadeEmLitros: 20.0,
      valorDoLitro: 5.0,
      bico: 'Bico 1',
      nomeFrentista: 'João da Silva',
    };

    const result = await controller.simularAbastecimento(dados);
    expect(result).toHaveProperty('mensagem', 'Abastecimento realizado com sucesso!');
    expect(result).toHaveProperty('registro', mockAbastecimento);
    expect(abastecimentoModelMock.realizarAbastecimento).toHaveBeenCalledWith(dados);
  });

  it('deve listar todos os abastecimentos', async () => {
    const result = await controller.listarAbastecimentos();
    expect(result).toEqual([mockAbastecimento]);
    expect(abastecimentoModelMock.find).toHaveBeenCalled();
  });

  it('deve obter um abastecimento pelo ID', async () => {
    const id = 'algumId';
    const result = await controller.obterAbastecimento(id);
    expect(result).toEqual(mockAbastecimento);
    expect(abastecimentoModelMock.findById).toHaveBeenCalledWith(id);
  });
});
