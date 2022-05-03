# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados a partir de pesquisas de mercado e entrevistas feitas com motoristas profissionais atuantes no transporte por aplicativo. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.


## Personas


  
### <span style="color:Green">**`Sônia Maria`**


|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar/blob/master/docs/img/users/Sonia.jpg" width="160" height="100">   | **Sônia Maria** <br> 56 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Contadora 
|**Principais Aplicativos Utilizados** |Instagram, IQ Option, Whatsapp, Canvas, Waze e Hotel Hurbano
|**Motivação** |Familia, Saúde
|**Frustrações** |Desrespeito, Falta de Profissionalismo|
|**Hobbies/Histórias** |Viajar, Yoga, Cuidar dos Netos|
 
  

### <span style="color:Green">**`Felipe Almeida`**


|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar/blob/master/docs/img/users/Felipe.jpg" width="160" height="100">   | **Felipe Almeida** <br> 24 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Frentista 
|**Principais Aplicativos Utilizados** |Instagram, Facebook, Whatsapp, Uber, Waze e Telegram
|**Motivação** |Estudar e Dirigir
|**Frustrações** |Dificuldade de gerir o tempo, Insegurança|
|**Hobbies/Histórias** |Correr, Bar e encontros, Jogos Online, Viajar|


### <span style="color:Green">**`João Hélvecio`**


|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar/blob/master/docs/img/users/Joao.jpg" width="150" height="100">   | **João Hélvecio** <br> 63 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Aposentado 
|**Principais Aplicativos Utilizados** |Whatsapp, Uber, Waze e Radio Itatiaia
|**Motivação** |Estabilidade, Educação dos netos, Dirigir
|**Frustrações** |Acompanhar a Tecnologia, Usabilidade dos Aplicativos|
|**Hobbies/Histórias** |Teatro, Dançar, Caminhar, Netos|





## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Sônia e João Hélvecio|	Navegar com facilidade no site de locação.	|Conseguir entender bem os comandos, pois usualmente encontra dificuldade em sites que possuam muita informação.|
|Felipe e João Hélvecio|	Obter informações detalhadas sobre a oferta dos veículos para locação.|	Precisa definir as melhores opções para locar o veículo para trabalhar como motorista de aplicativo|
|Felipe e João Hélvecio|	Formalizar interesse na locação e obter resposta de forma rápida.	|Precisa fazer contato para iniciar a negociação e gostaria de ter uma resposta ágil.|
|Sônia|	Obter segurança no envio e armazenamento dos dados|	Sente insegurança em fornecer alguns tipos de informações pessoais, por medo de fraude.|
|Felipe|	Ser avisado de novas ofertas de aluguel pelo período desejado|	Gostaria de adiantar-se, quando novas ofertas com seu perfil forem anunciadas no site.|
|João Hévecio|	Gostaria de ter possibilidade de escolher o modelo de carro que quiser.|	Encontrar a melhor opção, pois possui modelos e marcas de preferência, que o site não seja restrito|


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    |Descrição do Requisito| Prioridade |
|------|----------------------|------------|
|RF-01|	Deve possuir tela "Home" e fornecer acesso a pagina de cadastro de locatário e tambem login para locatários já cadastrados;|ALTA|
|RF-02|	Deve possuir cadastro de usuario  para o locatario acessar a home logada e visualizar as ofertas de veiculos para locação;|ALTA|
|RF-03|	Disponibilizar as ofertas de aluguel de veículos;|MÉDIA|
|RF-04|	Disponibilizar aos usuários informações basicas como categorias, valores, franquia de KM permitindo a busca de anúncios que atendam o perfil;|ALTA|
|RF-05|	Deve disponibilizar cadastro especifico para o locatario fornecer os arquivos para a verificação documental e validação das informações pessoais;|ALTA|
|RF-06|	Fazer as buscas de ofertas, onde o usuário pode definir um periodo e hora desejados, a fim de saber atualizações de novas disponibilidades de veículos;|MÉDIA|
|RF-07| Sistema de marcação, para que o locatário salve como favorita a opção de locação, para que consiga formalizar o aluguel em novos agendamentos;|BAIXA|
|RF-08| O site deve possibilitar o cadastro das informações financeiras como cartão de credito e chave PIX para o pagamento do contrato e caução;|ALTA|
|RF-09| Fornecer pagina com historico das solicitações ja realizadas pelo locatário, sejam em andamento ou encerradas.|ALTA|


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID  | Descrição do Requisito  |Prioridade |
|----|-------------------------|----|
|RNF-01|	O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages);|ALTA|
|RNF-02|	O site deverá ser responsivo permitindo a visualização em um celular de forma adequada;|ALTA|
|RNF-03|	O site deve ter bom nível de contraste entre os elementos da tela em conformidade;|MÉDIA|
|RNF-04|	O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).|ALTA|


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01|	O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022|
|RE-02|	O aplicativo deve se restringir às tecnologias básicas da Web no Front-end|
|RE-03|	O site não deve permitir a locação para outros fins além de transporte por aplicativos
