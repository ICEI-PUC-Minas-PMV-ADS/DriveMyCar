# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados a partir de pesquisas de mercado e entrevistas feitas com motoristas profissionais atuantes no transporte por aplicativo. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.


## Personas


### <span style="color:Green">**`Rodrigo Monteiro`**


|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar/blob/master/docs/img/users/Rodrigo.jpg" width="160" height="100">   | **Rodrigo Monteiro** <br> 47 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Advogado 
|**Principais Aplicativos Utilizados** |Instagram, Facebook, Internet Banking, Uber, 99 Pop e Waze
|**Motivação** |Familia, Rentabilidade, Liberdade
|**Frustrações** |Burocracias, Desvalorização do trabalho, Custo Brasil|
|**Hobbies/Histórias** |Jogar Futebol, Churrascos, Proprietário de Frota|
 
  
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
|Rodrigo e Sônia	|Anunciar veículo para locação.	|Precisa anunciar seus veículos para locação.|
|Rodrigo |	Encontrar motoristas que se encaixem no perfil desejado.	|Otimizar a locação dos seus veiculos.|
|Rodrigo e Sônia|	Realizar o contato com o locatário e validar informações.|	Precisa fazer contato para concluir o negócio (locação).|
|Sônia e João Hélvecio|	Navegar com facilidade no site.	|Conseguir intuir bem os comandos, pois usualmente encontra dificuldade em sites que possuem muita informação.|
|Felipe e João Hélvecio|	Obter informações detalhadas sobre a oferta dos veículos para locação.|	Precisa definir as melhores opções para locar o veículo para trabalhar como motorista de aplicativo|
|Felipe e João Hélvecio|	Formalizar interesse na locação e obter resposta de forma rápida.	|Precisa fazer contato para iniciar a negociação e gostaria de ter uma resposta ágil.|
|Sônia|	Obter segurança no envio e armazenamento dos dados|	Sente insegurança em fornecer alguns tipos de informações pessoais, por medo de fraude.|
|Felipe|	Ser avisado de novas ofertas de aluguel pelo período desejado|	Gostaria de adiantar-se, quando novas ofertas com seu perfil forem anunciadas no site.|
|João Hévecio|	Gostaria de ter muitas possibilidades, escolher o modelo de carro que quiser.|	Encontrar a melhor opção, pois possui modelos e marcas de preferência, que o site não seja restrito|


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01|	Deve possuir tela de home com possibilidade de busca dos veiculos disponiveis;|	ALTA|
|RF-02|	Disponibilizar as ofertas de aluguel de veículos;|	MÉDIA|
|RF-03|	Disponibilizar aos usuários informações basicas como categoria , valor e a partir disso realizar buscas de anúncio que atenda o perfil;	|ALTA|
|RF-04|	Deve possuir cadastro de especifico para o locador com verificação de (documentos , data/hora e valor)  outro especifico para locatario com verificação de (documentos , data e faixa de valor  ;|	ALTA|
|RF-05|	Entregar os anuncios/ofertas para o locador por opções de data, faixa de valor e tipo;	|MÉDIA|
|RF-06| O site deve possuir um sistema de marcação, para que o locatário marque de forma instantânea interesse na opção de locação desejada e salve como favorita a opção de locação, para que consiga formalizar o aluguel em momento posterior;	|MÉDIA|
|RF-07|	Fazer as buscas das ofertas disponíveis, o usuário pode criar definir uma janela de datas para o período desejado, a fim de saber atualizações de novas disponibilidades de veículos;	|BAIXA|



### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01|	O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);|	ALTA|
|RNF-02|	O site deverá ser responsivo permitindo a visualização em um celular de forma adequada	|ALTA|
|RNF-03|	O site deve ter bom nível de contraste entre os elementos da tela em conformidade	|MÉDIA|
|RNF-04|	O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)	|ALTA|


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01|	O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022|
|RE-02|	O aplicativo deve se restringir às tecnologias básicas da Web no Front-end|
|RE-03|	O site não deve permitir a locação para outros fins além de transporte por aplicativos
