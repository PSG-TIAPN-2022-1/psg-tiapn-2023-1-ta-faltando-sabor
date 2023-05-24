# Informações do Projeto
`TÍTULO DO PROJETO`  

Tá Faltando Sabor

`CURSO` 

Trabalho Interdisciplinar - Aplicações para Processos de Negócios

## Participantes

Duane Henrique Alves de Carvalho e Silva
Diego Alan de Aguiar Gonçalves
Estael Medeiros 
Pedro Ramalho
Vitor Hugo Sorrentino Reis 

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


Introdução
Com o estilo de vida agitado dos dias de hoje, muitas vezes é difícil encontrar tempo para planejar e preparar uma refeição saudável e deliciosa. Além disso, quando chega o momento de preparar uma refeição, pode não se saber o que cozinhar com os ingredientes disponíveis em sua geladeira. É nesse ponto que um sistema de culinária que facilite a escolha de receitas baseadas em ingredientes disponíveis pode ser extremamente útil.
Problema
A aplicação proposta neste projeto busca facilitar a procura de receitas de acordo com os ingredientes disponíveis em sua residência, poupando tempo de cozinha, compra e pesquisa.
Objetivos
O objetivo geral deste trabalho é a criação de um portal de procura por receitas, a fim de otimizar o tempo do usuário. O produto a ser criado pretende solucionar o problema da falta de tempo para buscar pratos a serem preparados para refeições domésticas. Para tal, a aplicação a ser desenvolvida oferecerá funções de procura, armazenamento e compartilhamento de receitas tendo como base ingredientes que o usuário afirmar ter. 

Como objetivos específicos, podemos ressaltar:
Fornecer meios de pesquisa com base nos ingredientes disponíveis ao usuário;
Oferecer um catálogo de receitas organizados pela preferência do usuário, facilitando sua procura;
Possibilitar que o usuário arquive suas receitas favoritas;
Permitir que usuários cadastrem suas próprias receitas no site;
Proporcionar formas de coletar informações dos usuários para criação de um banco de dados.
Justificativa
O projeto de um sistema de culinária que facilite a escolha de receitas com base nos ingredientes disponíveis na geladeira de uma pessoa tem uma grande relevância prática para a vida cotidiana das pessoas. Com a correria do dia a dia, muitas vezes acaba-se esquecendo ou não sabendo quais ingredientes estão disponíveis em casa, o que pode acabar resultando em desperdício de alimentos e dinheiro. Além disso, pode ser desafiador escolher uma receita que utilize apenas os ingredientes disponíveis na geladeira, levando a escolhas inadequadas ou até mesmo ao descarte de alimentos que poderiam ser aproveitados.

Um sistema de culinária que leve em conta os ingredientes disponíveis na geladeira de uma pessoa pode ajudar a solucionar esses problemas e simplificar o processo de escolha de receitas. Ao registrar os ingredientes disponíveis, o sistema poderá sugerir receitas que utilizem esses ingredientes e evitar o desperdício de alimentos, além da economia de tempo gasto na busca por receitas. O sistema pode também oferecer opções de receitas personalizadas, levando em conta as preferências dos usuários e sugerindo variações nas receitas com base nos ingredientes disponíveis.
Por fim, este sistema pode ser uma solução prática e acessível para ajudar as pessoas a planejar melhor suas refeições e reduzir o desperdício de recursos, tanto alimentos quanto dinheiro e tempo. Com a facilidade de acesso a receitas e a possibilidade de personalização, é possível tornar o processo de cozinhar mais eficiente e agradável, trazendo benefícios para o bolso dos usuários.
Público-alvo
Por se tratar de uma ferramenta destinada a pessoas que não cozinham com frequência, estima-se que o público dela seja jovens. Sendo assim,  esta solução seria direcionada a homens e mulheres entre 18 e 30 anos. Entende-se que a portal a ser desenvolvido poderia também ser estendida a outras faixas etárias posteriormente, mas, como parte de um escopo inicial, optou-se por direcionar o produto a jovens adultos, visto que este público possivelmente seria mais habituado a  soluções deste tipo. Outro fator seria considerar que, dentro desse grupo, o foco seria atingir pessoas que moram sozinhas ou dividem com amigos e parceiros, sendo, então, para donos de casa jovens que, com a falta de tempo do dia-a-dia, não cozinhariam diariamente.
Especificação do Projeto
Para alcançar uma definição mais concreta do problema, foi feito um mapeamento das prováveis partes interessadas em utilizar a solução proposta neste trabalho. Assim, foi possível compreender as motivações e limitações dos diferentes grupos que este projeto pretende atingir. As informações levantadas nessa atividade culminaram na criação de personas que servirão de norte para o desenvolvimento do produto.

As personas desenvolvidas para este trabalho foram condensadas em três perfis. Foi considerado que, dentro da faixa etária definida e tendo em vista o estilo de vida pressuposto para o público-alvo, estariam estudantes, assalariados e aqueles que trabalham e estudam simultaneamente. Cada uma dessas pessoas teria objetivos distintos para o uso da ferramenta e, consequentemente, também apresentaria restrições e repulsas a determinados aspectos dela, sendo necessário  evitá-las para seu bom resultado como produto.
Personas
As personas definidas para o projeto são as explicitadas a seguir.


Luiz
IDADE: 20
OCUPAÇÃO: Estudante



OBJETOS E LUGARES: Tem costume de usar o celular constantemente.


OBJETIVOS CHAVE:
Preocupa-se com o seu orçamento e não estourar o valor que tem destinado mensalmente para suas despesas.


COMO DEVEMOS TRATÁ-LO?
Como usuário, gostaria que a aplicação fornecesse soluções simples e baratas para sua alimentação.
NUNCA DEVEMOS:
Não se sentiria incentivado a utilizar a ferramenta se as receitas o fizessem comprar ingredientes demais.





Roberta
IDADE: 28
OCUPAÇÃO: Assalariada




OBJETOS E LUGARES: Tem costume de usar o celular, mas apenas fora do trabalho.


OBJETIVOS CHAVE:
Pela rotina de trabalho, utilizaria a ferramenta como forma de ganhar tempo e poupar momentos em casa para descansar.


COMO DEVEMOS TRATÁ-LA?
Como usuária, faria questão que a aplicação apresentasse soluções rápidas e que a busca por receitas não a fizesse perder tempo.
NUNCA DEVEMOS:
Não se sentiria incentivada a usar a plataforma se ela, em vez de economizar seu tempo, a fizesse gastar mais procurando boas receitas e comprando os ingredientes indicados que cozinhando pratos sugeridos por outros sites.







Paulo
IDADE: 24
OCUPAÇÃO: Estudante e assalariado



OBJETOS E LUGARES: Não utiliza tanto seu telefone, em função da rotina apertada. Utiliza o aparelho para comunicação para caso haja algum imprevisto ou precise de um fim específico.
OBJETIVOS CHAVE:
Uma aplicação de busca por receitas seria uma ótima ajuda para ele, pois sua rotina de trabalho e estudos não permite que faça pratos elaborados e que gastem muito.


COMO DEVEMOS TRATÁ-LO?
Sentiria-se bem se pudesse ter uma utilização muito simples rápida da aplicação, de forma que ela entregasse receitas com um nível moderado de complexidade e custo com poucos cliques.
NUNCA DEVEMOS:
Tornar a experiência de uso da ferramenta demorada e maçante, para que ele não perca o interesse e opte por outro site semelhante.





Requisitos do Projeto
Através da concepção inicial do escopo funcional do projeto é possível visualizar e projetar a trajetória do desenvolvimento do produto. Este é definido por meio dos requisitos funcionais e não-funcionais, que descrevem o que deve ser desenvolvido pela equipe. Essas tarefas especificam funcionalidades do sistema, assim como potenciais limitações. Estes requisitos estão descritos a seguir.
Requisitos Funcionais
A tabela a seguir detalha os requisitos definidos para o projeto, especificando a prioridade em que devem ser produzidos.

ID
Descrição
Prioridade
RF-01
O sistema deve permitir ao usuário registrar os ingredientes disponíveis na sua geladeira, para que possa mostrar as receitas disponíveis com base nesses ingredientes. 
Essencial
RF-02
O sistema deve ter um banco de dados de receitas que possa ser consultado para encontrar receitas que possam ser feitas com os ingredientes registrados. 
Essencial
RF-03
O sistema deve ter um filtro de receitas que possa ser usado para restringir as receitas mostradas com base em fatores como tempo de preparo, tipo de cozinha, nível de dificuldade, etc. 
Importante
RF-04
O sistema pode gerar uma lista de compras com base nas receitas selecionadas, para que o usuário possa comprar os ingredientes necessários. 
Importante
RF-05
O sistema deve fornecer instruções claras sobre como preparar cada receita, incluindo quantidades, tempo de cozimento, temperaturas e outras informações relevantes.
Essencial
RF-06
O sistema pode permitir que os usuários avaliem as receitas e forneçam feedback sobre a facilidade de preparo, sabor e outras características.
Importante
RF-07
O sistema pode permitir que os usuários compartilhem receitas com outros usuários ou em redes sociais, tornando-o uma plataforma de comunidade para entusiastas de culinária.
Desejável
RF-08
O sistema pode sugerir variações nas receitas com base nos ingredientes disponíveis e permitir que os usuários personalizem as receitas de acordo com suas preferências. 
Desejável


Requisitos não-funcionais
A tabela a seguir apresenta os requisitos não-funcionais que o projeto deverá atender.

ID
Descrição
Prioridade
RNF-01
O sistema deve ser fácil de usar, com uma interface intuitiva e navegação clara, para que os usuários possam encontrar rapidamente as informações que precisam.
Essencial
RNF-02
O sistema deve ser confiável e estável, para que os usuários possam contar com ele para fornecer receitas precisas e úteis sempre que precisarem.
Essencial
RNF-03
O sistema deve ser rápido e responsivo, para que os usuários possam obter as informações que precisam sem esperar muito tempo.
Importante
RNF-04
O sistema deve proteger as informações dos usuários, como dados de login, preferências e receitas pessoais, para que não sejam acessados por pessoas não autorizadas.
Importante
RNF-05
O sistema deve ser capaz de lidar com um grande número de usuários e receitas, sem comprometer a qualidade ou o desempenho.
Desejável
RNF-06
O sistema deve ser projetado para ser executado em diferentes plataformas, como desktops, tablets e dispositivos móveis, para que os usuários possam acessá-lo em qualquer lugar. 
Desejável
RNF-07
O sistema deve suportar vários idiomas e formatos de data, para que possa ser usado por usuários de todo o mundo.
Desejável
RNF-08
O sistema deve ser projetado para ser acessível a pessoas com deficiências, como usuários com problemas de visão ou mobilidade reduzida.
Desejável



Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

ID
Descrição
RE-01
O projeto deverá ser entregue no final do semestre letivo.
RE-02
O aplicativo deve se restringir às tecnologias básicas da Web no Frontend e Backend.
RE-03
A equipe não pode subcontratar o desenvolvimento do trabalho.


Metodologia
A metodologia contempla as definições de ferramentas utilizadas pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.
Relação de Ambientes de Trabalho
Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue. 

Ambiente
Plataforma
Link de Acesso
Repositório de código fonte e documentos do projeto
GitHub
https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-ta-faltando-sabor
Projeto de Interface e  Wireframes
Figma
https://www.figma.com/ 

Gerenciamento do Projeto
A equipe deste projeto utiliza metodologias ágeis, tendo o Scrum como cerne do processo de desenvolvimento.

A equipe está organizada da seguinte maneira:
Scrum Master: Duane Henrique Alves de Carvalho e Silva
Product Owner: Leonardo Vilela Cardoso
Equipe de Desenvolvimento: 
Estael Medeiros (Desenvolvedor Front End e UI/UX)
Pedro Ramalho (Desenvolvedor Front End e UI/UX)
Duane Henrique Alves de Carvalho e Silva (Desenvolvedor Full Stack)
Vitor Hugo Sorrentino Reis (Desenvolvedor Back End/ Banco de Dados)
Diego Alan de Aguiar Gonçalves (Desenvolvedor Back End/Banco de Dados)


Projeto de Interface
Para a montagem da interface do sistema, a acessibilidade e usabilidade foram os focos para a estruturação da aplicação. Desta forma, foi idealizado um fluxo de telas simples que deixasse o usuário confortável e que priorizasse o controle deste de suas informações.
Fluxo do Usuário
A figura a seguir apresenta o fluxo de utilização do sistema através das telas do sistema. As telas são detalhadas a seguir, com suas interações demonstradas com ícones que indicam a sequência percorrida pelo usuário. 


Figura 2 - Fluxo de telas do usuário

Todo percurso pelo sistema inicia-se pela página inicial e direciona o usuário para as suas funções. Através dela é possível efetuar login em sua conta e, caso ainda não a tenha ainda, cadastrar-se para então poder utilizar o portal. Pela primeira tela também é permitido ao visitante acessar a tela de cadastro de receitas próprias, mas suas funcionalidades somente estarão disponíveis após o login, esta interação servirá como um incentivo para que um novo acessante com interesse no produto efetue seu cadastro e passe a usar a ferramenta.

Wireframes
Conforme o fluxo de telas do projeto descrito anteriormente, as telas do sistema são demonstradas em detalhes nos itens que se seguem. As telas do sistema apresentadas foram concebidas seguindo uma estrutura simples e considerando dois possíveis caminhos: um para o usuário já cadastrado na plataforma e outro de um novo usuário.

Para a criação dos wireframes, foi considerado que todas as telas teriam uma mesma navbar. Por trata-se de um elemento que repetiria em todo o site, ela não foi incluída na nos moldes descritos nesta seção.

Tela - Login
A tela de login contém um espaço para o e-mail, senha, além de uma seta redirecionando a página principal.


Tela - Cadastro de pessoas
A seguir vê-se a tela que o usuário conseguirá colocar seus dados no site, para ter benefícios dentro do mesmo.

Tela - Principal
A tela principal contém o redirecionamento da seção responsável pela pesquisa de receitas com base nos ingredientes disponíveis ao usuário. Nela há também sugestões aleatórias.


Tela - Cadastro de receitas
A tela de cadastro requer informações como descrição, nome da receita, modo de fazer… para que assim seja feito o cadastro das receitas, juntamente com um espaço para que sejam anexadas as fotos de tal.



Tela - Menu
Na tela menu o usuário informa os ingredientes disponíveis em sua casa e o que deseja em sua receita. Logo, aparecerá a lista de receitas que corresponde aos ingredientes escolhidos e ao seu filtro. 



Tela - Perfil
A tela de perfil será composta com a foto do usuário, o seu nome, idade e e-mail informado no cadastro, além das receitas favoritadas por tal. 


# Projeto da Solução

Para o bom desenvolvimento da plataforma proposta, foi preciso planejar e estruturar o projeto, de forma a definir corretamente a estratégia e a arquitetura a serem adotadas. Nesta seção, são apresentadas as escolhas e justificativas relacionadas às tecnologias utilizadas, levando em consideração critérios como desempenho e adequação à solução. Além disso, são abordadas as interações entre os componentes do sistema e o banco de dados, fornecendo uma visão geral do projeto. Essas informações são essenciais para compreender o funcionamento da aplicação desenvolvida, sendo base para as etapas de implementação do trabalho.

## Tecnologias Utilizadas

Os recursos tecnológicos empregados no desenvolvimento da plataforma web serão apresentados a seguir. A escolha das tecnologias teve como base em critérios como compatibilidade, desempenho e segurança.

**Linguagens** : HTML, CSS, JavaScript, SQL

**Bibliotecas** : React, Bootstrap

**Gerenciamento do Projeto**: Trello

**Edição de código**: VS Code

**Arquitetura do Banco de Dados**: MySQL

**BPMN**

O modelo foi elaborado considerando dois principais papéis dos usuários da plataforma: aquele que procura uma receita e aquele que cadastra uma nova opção no sistema. Tendo essas duas intenções possíveis como base, foi possível estruturar um passo a passo do caminho desses usuários pela plataforma, assim como qual seria o comportamento da aplicação em cada um dos casos.

!(images/Tá Faltando Sabor-BPMN-AdRec.png)

!(images/Tá Faltando Sabor-BPMN-PesqRec.png)

## Arquitetura da solução

A estrutura e o design da plataforma são apresentadas a seguir, mostrando as principais decisões arquiteturais tomadas durante o desenvolvimento do projeto. Isso inclui a definição dos componentes do sistema, a forma como eles interagem entre si e a distribuição das responsabilidades. São abordados aspectos como a lógica de negócio, além de outros elementos relevantes para o projeto, como os papéis de usuários e como sua interação com o sistema geraria e manipularia os dados.

Com o intuito de visualizar o funcionamento do sistema, algumas representações visuais foram elaboradas. O Modelo Entidade Relacionamento do projeto foi criado para que a interação entre os elementos da aplição fossem mais claramente compreendidos. Através dele, foi possível construir o Diagrama de Entidade e Relacionamento, aprofundando o entendimento acerca dos processos envolvendo o comportamento dos usuáriosao utlizarem a plataforma. Este processo possibilitou a criação do banco de dados do Tá Faltando Sabor, cuja estrutura está representada ao final desta seção. 


**Modelo Entidade Relacionamento**

!(images/MER.jpeg)

**Diagrama de Entidadade e Relacionamento**

!(images/DER.jpeg)

**Tabelas no Banco de Dados**

!(images/Tabelas.jpeg)

# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
