# **Sistema de gerenciamento para postos de combustíveis.**

## 1. Descrição do Projeto

---

A aplicação permite o registro de abastecimentos de combustíveis, incluindo tipo de combustível, quantidade abastecida e valor pago. O projeto segue o padrão **Model-View-Controller (MVC)** utilizando **NestJS** e **Mongoose** para persistência dos dados.

## 2. Organização dos Componentes do Projeto

---

O projeto está estruturado da seguinte forma:

```
/src
│── main.ts
│── app.module.ts
│── /abastecimento
│   ├── abastecimento.model.ts
│   ├── abastecimento.controller.ts
│   ├── abastecimento.module.ts
│── README.md
│── package.json

```

### **Descrição dos Componentes:**

- **Model (`abastecimento.model.ts`)**
    - Define a estrutura do abastecimento no banco de dados.
    - Inclui um esquema Mongoose para validação dos campos.
    - Implementa um método estático para registrar abastecimentos.
- **Controller (`abastecimento.controller.ts`)**
    - Gerencia as requisições HTTP relacionadas ao abastecimento.
    - Implementa endpoints para criar e listar abastecimentos.
- **Module (`abastecimento.module.ts`)**
    - Configura a importação do modelo Abastecimento no módulo NestJS.

## 3. Implementação de uma Funcionalidade

---

A funcionalidade escolhida é **registrar um abastecimento**.

### **Model - `abastecimento.model.ts`**

```tsx
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
        type: String, default: () => new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    },
    bico: { type: String, required: true },
    nomeFrentista: { type: String, required: true },
});

export interface Abastecimento extends mongoose.Document {
    tipoCombustivel: string;
    valorEmReais: number;
    quantidadeEmLitros: number;
    valorDoLitro: number;
    dataHora: string;
    bico: string;
    nomeFrentista: string;
}

export const AbastecimentoModel = mongoose.model<Abastecimento>('Abastecimento', AbastecimentoSchema);

```

---

### **Controller - `abastecimento.controller.ts`**

```tsx
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
        const novoAbastecimento = new this.abastecimentoModel(dadosAbastecimento);
        await novoAbastecimento.save();
        return { mensagem: 'Abastecimento registrado com sucesso!', registro: novoAbastecimento };
    }

    @Get()
    async listarAbastecimentos() {
        return this.abastecimentoModel.find().exec();
    }

    @Get(':id')
    async obterAbastecimento(@Param('id') id: string) {
        return this.abastecimentoModel.findById(id).exec();
    }
}

```

---

### **Module - `abastecimento.module.ts`**

```tsx
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

```

## 4. Como Funciona?

---

- O **usuário faz requisições HTTP** para criar e visualizar abastecimentos.
- O **controller processa as requisições** e interage com o banco de dados via Mongoose.
- Os dados são **armazenados no MongoDB** e podem ser consultados posteriormente.

Essa aplicação fornece um **sistema de registro de abastecimento** utilizando **NestJS e Mongoose**, garantindo validações de dados e persistência eficiente.