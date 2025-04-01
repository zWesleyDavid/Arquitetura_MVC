# Sistema de Auditoria para Postos de Combustíveis

Participantes: Anna Júlia Duarte Prando R.A: 22045748-2 | João Pedro dos Santos Lussani R.A: 22014550-2 | Wesley dos Santos David R.A: 22171156-2

[![Coverage](https://img.shields.io/badge/Coverage-91%25-brightgreen)](https://shields.io/)  
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)  
[![Framework: NestJS](https://img.shields.io/badge/Framework-NestJS-red)](https://nestjs.com/)

Este documento unifica a documentação e a arquitetura do projeto, contendo todas as informações presentes nos arquivos _Documentacao.md_ e _Arquitetura-MVC.md_. Nele, você encontrará desde a definição do produto até os detalhes de implementação, organização dos componentes e requisitos do sistema.

---

## Índice

1. [Documentação - Primeiro Projeto](#documenta%C3%A7%C3%A3o---primeiro-projeto)
   - [1. Definição do Produto](#1-defini%C3%A7%C3%A3o-do-produto)
   - [2. Cenários de Uso](#2-cen%C3%A1rios-de-uso)
   - [3. Benefícios Esperados](#3-benef%C3%ADcios-esperados)
   - [4. Requisitos do Sistema](#4-requisitos-do-sistema)
     - [4.1 Requisitos Funcionais](#41-requisitos-funcionais)
     - [4.2 Requisitos Não Funcionais](#42-requisitos-n%C3%A3o-funcionais)
   - [5. Restrições e Condições](#5-restri%C3%A7%C3%B5es-e-condi%C3%A7%C3%B5es)
   - [6. Necessidades dos Stakeholders](#6-necessidades-dos-stakeholders)
   - [7. Tendências Tecnológicas](#7-tend%C3%AAncias-tecnol%C3%B3gicas)
   - [8. Riscos do Projeto](#8-riscos-do-projeto)
   - [9. Tomada de Decisões](#9-tomada-de-decis%C3%B5es)
2. [Arquitetura do Projeto (Arquitetura-MVC.md)](#arquitetura-do-projeto-arquitetura-mvcmd)
   - [1. Descrição do Projeto](#1-descri%C3%A7%C3%A3o-do-projeto)
   - [2. Organização dos Componentes do Projeto](#2-organiza%C3%A7%C3%A3o-dos-componentes-do-projeto)
   - [3. Descrição dos Componentes](#3-descri%C3%A7%C3%A3o-dos-componentes)
     - [3.1 Model](#31-model)
     - [3.2 Controller](#32-controller)
     - [3.3 Module](#33-module)
   - [4. Como Funciona?](#4-como-funciona)

---

## Documentação - Primeiro Projeto

### 1. Definição do Produto

- **Sistema:** Auditoria para postos de combustíveis.
- **Produto:** Aplicação web.
- **Objetivo:** Auditar postos de combustíveis, monitorando e validando os registros operacionais e financeiros para garantir a conformidade e a integridade dos processos, além de auxiliar na identificação de eventuais irregularidades.
- **Público-alvo:** Proprietários e gestores de postos de combustíveis.

#### Contexto de Uso

- **Otimização do Controle Financeiro:** Facilitar a administração do caixa da conveniência, concentrando-se exclusivamente nas operações relacionadas aos abastecimentos.
- **Registro e Monitoramento:** Prover um registro detalhado e em tempo real de cada abastecimento, permitindo a consolidação de dados para análises posteriores.
- **Tomada de Decisão Estratégica:** Integrar um algoritmo de previsibilidade que analisa dados históricos e operacionais para orientar uma compra eficaz de combustíveis, reduzindo riscos de desabastecimento ou excesso de estoque.

### 2. Cenários de Uso

- **Importação de XMLs de Abastecimento:**  
  Após cada abastecimento, o sistema fiscal do posto emite automaticamente uma nota fiscal eletrônica (NFC-e), gerando um arquivo XML com os dados da operação. A aplicação de auditoria realiza a captura desses arquivos e os processa, extraindo informações como volume abastecido, produto, valor total, data, horário e bomba utilizada. Essa abordagem elimina a necessidade de integração direta com as bombas e permite uma implantação mais simples e não invasiva.

- **Análise e Previsão:**  
  Paralelamente, o algoritmo de previsibilidade processa os dados acumulados e fornece recomendações para futuras compras de combustíveis, auxiliando os gestores a manterem um estoque balanceado e a responderem de forma ágil às variações de demanda.

- **Tomada de Decisão:**  
  Com informações consolidadas, administradores e analistas podem ajustar estratégias, melhorar a eficiência operacional e garantir a sustentabilidade financeira do posto.

### 3. Benefícios Esperados

- **Eficiência Operacional:**  
  Redução de erros na administração dos abastecimentos e no controle financeiro.

- **Decisões Baseadas em Dados:**  
  Uso de análises preditivas para orientar a compra de combustíveis, otimizando recursos e evitando desperdícios.

- **Integração Harmoniosa:**  
  Implementação que complementa o sistema existente, sem necessidade de grandes reformulações ou investimentos adicionais.

- **Melhoria no Fluxo de Caixa:**  
  Foco exclusivo na gestão financeira dos abastecimentos, proporcionando uma visão clara dos recursos.

- **Validação Automatizada de Dados:**  
  A extração e leitura dos arquivos XML das notas fiscais eletrônicas permitem validar de forma automática os dados operacionais e financeiros de cada abastecimento, reduzindo a necessidade de conferência manual e aumentando a confiabilidade das informações.

- **Auditoria Contínua e Não Invasiva:**  
  O sistema audita os abastecimentos com base em documentos fiscais já emitidos, sem necessidade de integrar-se diretamente às bombas ou ao sistema de ponto de venda (PDV), facilitando a implantação e garantindo independência no processo de auditoria.

- **Identificação de Irregularidades:**  
  Análises comparativas e relatórios inteligentes permitem detectar desvios de padrões, inconsistências entre volume e valor, ou comportamentos atípicos que possam indicar falhas operacionais ou fraudes.

- **Transparência e Confiabilidade:**  
  Ao fornecer visibilidade clara sobre cada operação registrada, o sistema fortalece a confiança dos gestores nas informações apresentadas, tornando os dados auditáveis e rastreáveis a qualquer momento.


### 4. Requisitos do Sistema

#### 4.1 Requisitos Funcionais

1. **Coleta de Dados via XML de Notas Fiscais**

   - **Descrição:** O sistema deve importar automaticamente os dados operacionais e financeiros contidos nos XMLs das notas fiscais emitidas após cada abastecimento.
   - **Objetivo:** Garantir a obtenção confiável dos registros de abastecimento sem necessidade de integração direta com as bombas, simplificando a implantação.
   - **Critérios de Aceitação:**
     - Importação automática ou manual dos arquivos XML provenientes do sistema emissor de notas fiscais.
     - Extração correta das informações como data, hora, volume abastecido, valor da operação, identificação da bomba e CNPJ do emitente.
     - Armazenamento estruturado dos dados para posterior auditoria.

2. **Consolidação e Visualização de Dados**

   - **Descrição:** Consolida os dados e os apresenta por meio de dashboards e relatórios.
   - **Objetivo:** Permitir a visualização do desempenho operacional e financeiro.
   - **Critérios de Aceitação:**
     - Interfaces gráficas intuitivas com ferramentas de filtragem e ordenação.

3. **Gestão do Caixa da Conveniência (Foco em Abastecimentos)**

   - **Descrição:** Gerenciar e monitorar o fluxo financeiro vinculado aos abastecimentos, separando-o dos demais produtos.
   - **Objetivo:** Fornecer visão clara do fluxo de caixa decorrente dos abastecimentos.
   - **Critérios de Aceitação:**
     - Atualização automática e relatórios financeiros detalhados.

4. **Integração com Algoritmo de Previsibilidade**

   - **Descrição:** Incorpora um algoritmo que utiliza dados históricos para prever demandas e orientar compras.
   - **Objetivo:** Prevenir riscos de excesso ou falta de estoque.
   - **Critérios de Aceitação:**
     - Processamento periódico e interface para exibição de recomendações com indicadores de confiabilidade.

5. **Integração com Sistemas Existentes**

   - **Descrição:** Funciona como uma camada complementar, integrando-se ao sistema de gestão já instalado.
   - **Objetivo:** Evitar duplicidade de cadastros e aproveitar dados históricos.
   - **Critérios de Aceitação:**
     - Mecanismos de importação/exportação e sincronização em tempo real ou intervalada.

6. **Geração de Relatórios e Análises Operacionais**

   - **Descrição:** Geração de relatórios customizados (diários, semanais, mensais) e análises estratégicas.
   - **Objetivo:** Suporte à tomada de decisão.
   - **Critérios de Aceitação:**
     - Exportação dos relatórios em formatos padrão (PDF, Excel, CSV) e ferramentas de comparação de desempenho.

7. **Módulo de Autenticação e Autorização**

   - **Descrição:** Implementação de autenticação para garantir acesso restrito às funcionalidades.
   - **Objetivo:** Resguardar dados sensíveis.
   - **Critérios de Aceitação:**
     - Suporte a diferentes níveis de acesso e integração com políticas de senha.

8. **Notificações e Alertas**

   - **Descrição:** Envio de notificações sobre eventos relevantes (falhas, divergências financeiras, recomendações).
   - **Objetivo:** Informar os usuários em tempo real para ações imediatas.
   - **Critérios de Aceitação:**
     - Exibição clara e objetiva das notificações na interface.

9. **Registro de Logs e Auditoria**

   - **Descrição:** Manutenção de um histórico detalhado de operações e alterações.
   - **Objetivo:** Rastreabilidade e auditoria.
   - **Critérios de Aceitação:**
     - Registro automático com data, hora, usuário e tipo de ação.

10. **Configuração e Personalização do Sistema**
    - **Descrição:** Permite personalização de parâmetros e configurações, como horários de atualização e formatos de relatório.
    - **Objetivo:** Adaptar a aplicação às necessidades específicas de cada posto.
    - **Critérios de Aceitação:**
      - Interface amigável e persistência das configurações.

#### 4.2 Requisitos Não Funcionais

1. **Desempenho**

   - Tempo de resposta de, no máximo, 2 segundos.
   - Suporte ao aumento do volume de transações e processamento simultâneo.

2. **Segurança**

   - Mecanismos de autenticação, autorização e criptografia dos dados.
   - Medidas de proteção contra ameaças com monitoramento e registro de atividades suspeitas.

3. **Usabilidade**

   - Interface intuitiva e de fácil navegação, acessível a usuários com diferentes níveis de conhecimento.
   - Feedback visual claro (confirmações, erros, alertas).

4. **Manutenibilidade**

   - Código modular para facilitar inclusão de novas funcionalidades e correção de bugs.
   - Documentação técnica completa e testes automatizados (unitários, de integração e performance).

5. **Confiabilidade e Disponibilidade**

   - Projeto tolerante a falhas com redundância e backups.
   - Alta disponibilidade (por exemplo, 99,5% ou superior).

6. **Compatibilidade e Integração**
   - Funcionamento nos principais navegadores.
   - Integração com APIs padronizadas para comunicação com o sistema existente e o algoritmo preditivo.

### 5. Restrições e Condições

- **Restrições Técnicas:**

  - Plataformas: Jira, Clockify, Discord, Notion, Excalidraw, VsCode, MongoDB Compass.
  - Linguagens: TypeScript e NoSql.
  - Frameworks: Nest.js, Next.js e Node.js.
  - Hospedagem: RailWay e GitHub.

- **Restrições Não Técnicas:**  
  _(Informações adicionais não especificadas)_

### 6. Necessidades dos Stakeholders

- **Clientes (Proprietários e Gestores de Postos / Empresas Contratantes):**

  - Retorno sobre investimento e eficiência operacional.
  - Transparência e confiabilidade dos dados.
  - Escalabilidade e integração com outros sistemas.

- **Usuários Finais (Auditores e Funcionários dos Postos):**

  - Interface para registrar abastecimentos e acessar relatórios.
  - Sistema com alertas e notificações para inconsistências.
  - Segurança e integridade dos dados.

- **Gerentes de Projeto e Desenvolvedores:**
  - Clareza nos requisitos e escopo detalhado.
  - Ferramentas de monitoramento e gestão (ex.: Jira) para facilitar a comunicação.
  - Flexibilidade, atualização contínua, manutenibilidade e código limpo.
  - Arquitetura de software robusta e integração com outros sistemas.

### 7. Tendências Tecnológicas

- Exploração de novas linguagens, frameworks, plataformas em nuvem e metodologias ágeis.

### 8. Riscos do Projeto

- **Riscos Técnicos:**

  - Má integração com os sistemas de bombas, gerando inconsistências.
  - Falta de suporte adequado e atualizações que possam tornar o software obsoleto.
  - Baixo desempenho do sistema.

- **Riscos Operacionais:**

  - Dificuldade de adaptação da equipe ao novo sistema.
  - Possíveis interrupções nas operações do posto durante a implementação.

- **Riscos de Negócios:**
  - Custo inicial elevado.
  - Possível retorno financeiro baixo.
  - Concorrência com sistemas já consolidados.

### 9. Tomada de Decisões

- **Seleção de Tecnologias e Frameworks:**

  - Linguagens: TypeScript e NoSql.
  - Frameworks: Nest.js, Next.js e Node.js.

- **Definição de Estruturas de Dados:**

  - Ainda não definida.

- **Escolha de Algoritmos:**

  - Utilização de um algoritmo de previsibilidade para reduzir riscos de falta de combustível e outros problemas.

- **Adoção de Padrões de Projeto:**

  - Padrão MVC (Model, View, Controller).
  - Padrão Monolítico.

- **Definição de Componentes do Sistema:**

  - Registro de abastecimento.

- **Modelos de Decisão Utilizados:**
  - Prototipagem, experimentação e análise de risco.

---

## Arquitetura do Projeto (Arquitetura-MVC.md)

### 1. Descrição do Projeto

A aplicação permite o registro de abastecimentos de combustíveis, incluindo:

- Tipo de combustível.
- Quantidade abastecida.
- Valor pago.

O projeto segue o padrão **Model-View-Controller (MVC)** utilizando **NestJS** e **Mongoose** para a persistência dos dados.

### 2. Organização dos Componentes do Projeto

A estrutura do projeto é organizada da seguinte forma:

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

### 3. Descrição dos Componentes

#### 3.1 Model (abastecimento.model.ts)

- Define a estrutura do abastecimento no banco de dados.
- Inclui um esquema Mongoose para validação dos campos.
- Implementa um método estático para registrar abastecimentos.

```tsx
import * as mongoose from "mongoose";

export const AbastecimentoSchema = new mongoose.Schema({
  tipoCombustivel: {
    type: String,
    enum: ["Gasolina Comum", "Gasolina Aditivada", "Etanol", "Diesel S10"],
    required: true,
  },
  valorEmReais: { type: Number, required: true },
  quantidadeEmLitros: { type: Number, required: true },
  valorDoLitro: { type: Number, required: true },
  dataHora: {
    type: String,
    default: () =>
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
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

export const AbastecimentoModel = mongoose.model<Abastecimento>(
  "Abastecimento",
  AbastecimentoSchema
);
```

---

### 3.2 Controller (abastecimento.controller.ts)

- Gerencia as requisições HTTP relacionadas ao abastecimento.
- Implementa endpoints para criar e listar abastecimentos.

```tsx
import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Abastecimento } from "./abastecimento.model";

@Controller("abastecimentos")
export class AbastecimentoController {
  constructor(
    @InjectModel("Abastecimento")
    private readonly abastecimentoModel: Model<Abastecimento>
  ) {}

  @Post("simular")
  async simularAbastecimento(
    @Body() dadosAbastecimento: Partial<Abastecimento>
  ) {
    const novoAbastecimento = new this.abastecimentoModel(dadosAbastecimento);
    await novoAbastecimento.save();
    return {
      mensagem: "Abastecimento registrado com sucesso!",
      registro: novoAbastecimento,
    };
  }

  @Get()
  async listarAbastecimentos() {
    return this.abastecimentoModel.find().exec();
  }

  @Get(":id")
  async obterAbastecimento(@Param("id") id: string) {
    return this.abastecimentoModel.findById(id).exec();
  }
}
```

---

### 3.3 Module (abastecimento.module.ts)

- Configura a importação do modelo Abastecimento no módulo NestJS.

```tsx
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AbastecimentoController } from "./abastecimento.controller";
import { AbastecimentoSchema } from "./abastecimento.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Abastecimento", schema: AbastecimentoSchema },
    ]),
  ],
  controllers: [AbastecimentoController],
})
export class AbastecimentoModule {}
```

## 4. Como Funciona?

- O **usuário faz requisições HTTP** para criar e visualizar abastecimentos.
- O **controller processa as requisições** e interage com o banco de dados via Mongoose.
- Os dados são **armazenados no MongoDB** e podem ser consultados posteriormente.
