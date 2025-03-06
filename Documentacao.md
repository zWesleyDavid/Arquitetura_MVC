# Documentação - Primeiro Projeto

## 1. Definição do produto

---

**Sistema de gerenciamento para postos de combustíveis.**

**Produto:** Aplicação web.

**Objetivo:** Gerenciar postos de combustíveis.

**Público-alvo:** Proprietários e gestores de postos de combustíveis.

**Contexto de uso:**

- Otimização do Controle Financeiro: Facilitar a administração do caixa da conveniência, concentrando-se exclusivamente nas operações relacionadas aos abastecimentos.
- Registro e Monitoramento: Prover um registro detalhado e em tempo real de cada abastecimento, permitindo a consolidação de dados para análises posteriores.
- Tomada de Decisão Estratégica: Integrar um algoritmo de previsibilidade que analisa dados históricos e operacionais para orientar uma compra eficaz de combustíveis, contribuindo para a redução de riscos de desabastecimento ou excesso de estoque.

**Cenários de uso:** 

No dia a dia, o fluxo de operação se desenvolve da seguinte forma:

- Registro Automático: Ao final de cada abastecimento, a bomba envia automaticamente os dados operacionais e financeiros para o sistema, garantindo que todas as informações estejam atualizadas sem a necessidade de intervenção manual.
- Análise e Previsão: Paralelamente, o algoritmo de previsibilidade processa os dados acumulados e fornece recomendações para futuras compras de combustíveis, auxiliando os gestores a manterem um estoque balanceado e a responderem de forma ágil às variações de demanda.
- Tomada de Decisão: Com as informações consolidadas, os administradores e analistas podem ajustar estratégias, melhorar a eficiência operacional e garantir a sustentabilidade financeira do posto.

**Benefícios esperados:**

- Eficiência Operacional: Redução de erros na administração dos abastecimentos e no controle financeiro.
- Decisões Baseadas em Dados: Uso de análises preditivas para orientar a compra de combustíveis, otimizando os recursos e evitando desperdícios.
- Integração Harmoniosa: Implementação que complementa o sistema existente, sem a necessidade de grandes reformulações ou investimentos adicionais.
- Melhoria no Fluxo de Caixa: Foco exclusivo na gestão financeira dos abastecimentos, proporcionando uma visão clara e precisa dos recursos.

## 2. Requisitos do sistema

---

**Requisitos Funcionais:** 

1 - Registro Automático de Abastecimentos

- Descrição: Assim que o abastecimento é finalizado, a bomba envia automaticamente os dados operacionais e financeiros para o sistema.
- Objetivo: Garantir que os dados sejam coletados sem intervenção manual, eliminando erros e agilizando o fluxo de informações.
- Critérios de Aceitação:
    - O sistema recebe, processa e armazena os dados de cada operação imediatamente após o término do abastecimento.
    - Os registros devem conter informações como data, hora, volume abastecido, valor da operação e identificação da bomba.

2 - Consolidação e Visualização de Dados

- Descrição: O sistema consolida os dados recebidos e os apresenta por meio de dashboards e relatórios.
- Objetivo: Permitir que os administradores e gestores visualizem em tempo real o desempenho operacional e financeiro do posto.
- Critérios de Aceitação:
    - Interfaces gráficas intuitivas para visualização de históricos e análises.
    - Ferramentas de filtragem e ordenação dos dados por períodos, bombas ou outros parâmetros relevantes.

3 - Gestão do Caixa da Conveniência (Foco em Abastecimentos)

- Descrição: O sistema deve gerenciar e monitorar o fluxo financeiro vinculado exclusivamente aos abastecimentos, separando-o dos demais produtos da conveniência.
- Objetivo: Fornecer uma visão clara e precisa do fluxo de caixa decorrente dos abastecimentos, facilitando o controle financeiro.
- Critérios de Aceitação:
    - Atualização automática dos valores conforme os registros de abastecimento são recebidos.
    - Relatórios financeiros que evidenciem entradas, saídas e saldo do caixa relacionado aos abastecimentos.

4 - Integração com Algoritmo de Previsibilidade

- Descrição: O sistema incorpora um algoritmo que utiliza dados históricos e variáveis operacionais para gerar previsões de demanda e orientar a compra de combustíveis.
- Objetivo: Auxiliar na tomada de decisão, prevenindo riscos de excesso ou falta de estoque.
- Critérios de Aceitação:
    - Processamento periódico dos dados para atualização das previsões.
    - Interface que exiba as recomendações de compra, juntamente com indicadores de confiabilidade e tendências.

5 - Integração com Sistemas Existentes

- Descrição: A aplicação deve funcionar como uma camada complementar, integrando-se de forma transparente ao sistema de gestão já instalado no posto.
- Objetivo: Aproveitar os dados históricos e evitar a duplicidade de cadastros, garantindo uma transição suave.
- Critérios de Aceitação:
    - Mecanismos de importação/exportação de dados entre os sistemas.
    - Sincronização em tempo real ou em intervalos programados, conforme a infraestrutura disponível.

6 - Geração de Relatórios e Análises Operacionais

- Descrição: O sistema deve gerar relatórios customizados (diários, semanais, mensais) e análises que suportem a tomada de decisão.
- Objetivo: Prover informações estratégicas para administradores, facilitando o monitoramento e a identificação de tendências.
- Critérios de Aceitação:
    - Possibilidade de exportar os relatórios em formatos padrão (PDF, Excel, CSV).
    - Ferramentas de comparação e análise de desempenho entre diferentes períodos.

7 - Módulo de Autenticação e Autorização

- Descrição: Implementação de um sistema básico de autenticação dos usuários.
- Objetivo: Garantir que apenas pessoas autorizadas tenham acesso às funcionalidades do sistema, resguardando dados sensíveis.
- Critérios de Aceitação:
    - Suporte a diferentes níveis de acesso (administradores, operadores, analistas).
    - Integração com políticas de senha e registro de logs de acesso.

8 - Notificações e Alertas

- Descrição: O sistema deverá enviar notificações e alertas aos usuários sobre eventos relevantes, como falhas no registro, divergências financeiras ou recomendações do algoritmo.
- Objetivo: Manter os usuários informados em tempo real, possibilitando ações imediatas quando necessário.
- Critérios de Aceitação:
    - Envio de alertas e notificações (sistema interno).
    - Exibição clara e objetiva das notificações na interface.

9 - Registro de Logs e Auditoria

- Descrição: O sistema deve manter um histórico detalhado de todas as operações e alterações realizadas.
- Objetivo: Assegurar a rastreabilidade das ações e facilitar auditorias e investigações em caso de anomalias.
- Critérios de Aceitação:
    - Registro automático dos eventos com informações de data, hora, usuário e tipo de ação.
    - Disponibilidade dos logs para consulta por usuários com permissão apropriada.

10 - Configuração e Personalização do Sistema

- Descrição: Permitir que o usuário personalize parâmetros e configurações do sistema, como horários de atualização e formatos de relatórios.
- Objetivo: Adaptar a aplicação às necessidades específicas de cada posto e promover maior flexibilidade operacional.
- Critérios de Aceitação:
    - Interface de configuração amigável e intuitiva.
    - Persistência das configurações personalizadas entre sessões.

**Requisitos Não Funcionais:**

1 - Desempenho

- Tempo de Resposta: O sistema deve processar e exibir os registros de abastecimento em, no máximo, 2 segundos após o recebimento dos dados.
- Escalabilidade: Deve suportar o aumento do volume de transações sem degradação significativa do desempenho, considerando picos de operação e crescimento do número de bombas e postos integrados.
- Capacidade de Processamento: O sistema deve ser capaz de processar simultaneamente múltiplas requisições sem comprometimento da integridade dos dados.

2 - Segurança

- Autenticação e Autorização: Implementação de mecanismos de autenticação e controle de acesso.
- Criptografia: Dados sensíveis, tanto em repouso quanto em trânsito, devem ser criptografados.
- Proteção contra Ameaças: O sistema deve incorporar medidas contra ataques, além de monitorar e registrar atividades suspeitas para auditoria.

3 - Usabilidade

- Design Intuitivo: A interface deve ser clara e de fácil navegação, permitindo que usuários com diferentes níveis de conhecimento tecnológico consigam operar o sistema sem dificuldade.
- Acessibilidade: O sistema deverá seguir as diretrizes de acessibilidade.
- Feedback Visual: Fornecer mensagens de confirmação, erros e alertas de forma clara para orientar o usuário durante a utilização das funcionalidades.

4 - Manutenibilidade

- Modularidade: O código deve ser organizado de forma modular, facilitando a inclusão de novas funcionalidades, correção de bugs e atualizações futuras.
- Documentação: Toda a aplicação deve possuir documentação técnica abrangente, incluindo diagramas, fluxogramas e comentários no código, para facilitar o suporte e a manutenção.
- Testabilidade: Implementação de testes automatizados (unitários, de integração e de performance) para garantir a qualidade e facilitar futuras modificações.
- Suporte e Atualizações: O sistema deve permitir atualizações sem impacto nas operações, por meio de deploys contínuos e estratégias de rollback em caso de falhas.

5 - Confiabilidade e Disponibilidade

- Tolerância a Falhas: O sistema deve ser projetado para garantir a continuidade operacional mesmo em caso de falhas parciais, por meio de redundância e backups regulares.
- Disponibilidade: Deve atingir um tempo de disponibilidade elevado (por exemplo, 99,5% ou superior), minimizando interrupções que possam afetar o fluxo de caixa e as operações.

6 - Compatibilidade e Integração

- Compatibilidade com Browsers: A aplicação deve funcionar corretamente nos principais navegadores web.
- Integração com APIs: A interface com o sistema existente e com o algoritmo preditivo deve utilizar APIs padronizadas, facilitando a comunicação entre sistemas e garantindo a integridade dos dados.

## **3. Restrições e Condições**

---

**Restrições técnicas:** 

- Plataformas: Jira, Clockify, Discord, Notion, Excalidraw, VsCode, MongoDB Compass.
- Linguagens de programação: Typescript e NoSql.
- Frameworks: Nest.js, Next.js e Node.js.

**Restrições não técnicas:**

## **4. Necessidades dos Stakeholders**

---

**Clientes (Proprietários e Gestores de Postos / Empresas Contratantes):**

- Retorno sobre Investimento e Eficiência Operacional.
- Transparência e Confiabilidade dos Dados.
- Escalabilidade e Integração com outros sistemas.

**Usuários Finais (Auditores e Funcionários dos Postos):**

- Interface para registrar abastecimentos e acessar relatórios.
- Sistema que forneça alertas e notificações em caso de inconsistências
- Segurança e integridade de dados dos usuários.

**Gerentes de Projeto e Desenvolvedores:**

- Clareza nos Requisitos e Escopo detalhado do projeto
- Monitoramento e Gestão, através de ferramentas (como Jira) para facilitar a comunicação entre os integrantes.
- Flexibilidade e atualização contínua.
- Arquitetura de Software e Integração com outros sistemas.
- Manutenibilidade Alta e Código Limpo.

## 5. **Tendências Tecnológicas**

---

Exploração de novas linguagens, frameworks, plataformas em nuvem e metodologias ágeis.

## 6. **Riscos do Projeto**

---

**Riscos Técnicos:**

- Má integração com os sistemas de bombas, gerando inconsistências nas vendas.
- Falta de suporte adequado.
- Falta de atualizações podem tornar o software obsoleto.
- Baixo desempenho do sistema.

**Riscos Operacionais:**

- Dificuldade de adaptação da equipe ao uso do novo sistema.
- Interrupções nas operações do posto durante a implementação do sistema.

**Riscos de Negócios:**

- O custo inicial do sistema pode ser financeiramente alto.
- Retorno financeiro pode ser baixo.
- Concorrência com sistemas já consolidados no mercado.

## 7. **Tomada de Decisões**

---

**Seleção de tecnologias e frameworks:**

- Linguagens de programação: Typescript e NoSql.
- Frameworks: Nest.js, Next.js e Node.js.

**Definição de estruturas de dados:**

- Ainda não definido.

**Escolha de algoritmos:**

- Iremos utilizar um algoritmo de previsibilidade para reduzir as chances de falta de combustível e outros problemas.

**Adoção de padrões de projeto:**

- Padrão MVC - Model, View, Controller.

**Definição de componentes do sistema:**

- Registro de abastecimento.

**Modelos de decisão utilizados:**

- Prototipagem e experimentação
- Análise de risco