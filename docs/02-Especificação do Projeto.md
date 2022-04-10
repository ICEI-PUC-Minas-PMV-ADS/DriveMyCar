# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados a partir de pesquisas de mercado e entrevistas feitas com motoristas profissionais atuantes no transporte por aplicativo. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.


## Personas


<span style="color:Green">**Rodrigo Monteiro**


|<img src="img/Rodrigo.jpg" width="160" height="100">   | **Rodrigo Monteiro** <br> 47 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Advogado 
|**Principais Aplicativos Utilizados** |Instagram, Facebook, Internet Banking, Uber, 99 Pop e Waze
|**Motivação** |Familia, Rentabilidade, Liberdade
|**Frustrações** |Burocracias, Desvalorização do trabalho, Custo Brasil|
|**Hobbies/Histórias** |Jogar Futebol, Churrascos, Proprietário de Frota|
 
  
<span style="color:Green">**Sônia Maria**


|<img src="img/Sonia.jpg" width="160" height="100">   | **Sônia Maria** <br> 56 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Contadora 
|**Principais Aplicativos Utilizados** |Instagram, IQ Option, Whatsapp, Canvas, Waze e Hotel Hurbano
|**Motivação** |Familia, Saúde
|**Frustrações** |Desrespeito, Falta de Profissionalismo|
|**Hobbies/Histórias** |Viajar, Yoga, Cuidar dos Netos|
 
  

<span style="color:Green">**Felipe Almeida**


|<img src="img/Felipe.jpg" width="160" height="100">   | **Felipe Almeida** <br> 24 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Frentista 
|**Principais Aplicativos Utilizados** |Instagram, Facebook, Whatsapp, Uber, Waze e Telegram
|**Motivação** |Estudar e Dirigir
|**Frustrações** |Dificuldade de gerir o tempo, Insegurança|
|**Hobbies/Histórias** |Correr, Bar e encontros, Jogos Online, Viajar|


<span style="color:Green">**João Hélvecio**


|<img src="img/Joao.jpg" width="150" height="100">   | **João Hélvecio** <br> 63 anos   |
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
|Rodrigo |	Encontrar motoristas que se encaixem no perfil desejado.	|Encontrar motoristas que se encaixem no perfil desejado.|
|Rodrigo e Sônia|	Realizar o contato com o locatário e validar informações.|	Precisa fazer contato para concluir o negócio (locação).|
|Sônia e João Hélvecio|	Navegar com facilidade no site.	|Conseguir intuir bem os comandos, pois usualmente encontra dificuldade em sites que possuem muita informação.|
|Felipe|	Obter informações detalhadas sobre a oferta dos veículos para locação parcial.|	Precisa definir as melhores opções para locar o veículo para trabalhar conciliando outra atividade.|
|Felipe|	Formalizar interesse na locação e obter resposta de forma rápida.	|Precisa fazer contato para iniciar a negociação e gostaria de ter uma resposta ágil.|
|Felipe e João Hélvecio|	Procurar por veículos para rodar em período comercial, durante a semana.|	Não tem veículo e precisa alugar um para trabalhar como motorista de aplicativo no horário comercial.|
|Sônia|	Obter segurança no envio e armazenamento dos dados|	Sente insegurança em fornecer alguns tipos de informações pessoais, por medo de fraude.|
|Felipe|	Ser avisado de novas ofertas de aluguel pelo período desejado|	Gostaria de adiantar-se, quando novas ofertas com seu perfil forem anunciadas no site.|
|João Hévecio|	Gostaria de ter muitas possibilidades, escolher o modelo de carro que quiser.|	Encontrar a melhor opção, pois possui modelos e marcas de preferência, que o site não seja restrito|


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01|	Deve possuir tela de home com possibilidade de busca ;|	ALTA|
|RF-02|	Disponibilizar de forma simples e dinâmica as ofertas de aluguel de veículos;|	MÉDIA|
|RF-03|	Deve possuir uma barra de filtragem onde poderá definir-se como a busca deve ser feita, em relação a profundidade de escalonamento entre as opções de veículo, em relação a, custo, período, quilometragem, modelo, priorizando o custo e o período de disponibilidade;	|MÉDIA|
|RF-04|	O aplicativo tem que ser funcional, hábil e de utilização intuitiva;|	MÉDIA|
|RF-05|	Solicitar e disponibilizar aos usuários informações relevantes para a elaboração de perfis e anúncio;	|ALTA|
|RF-06|	Deve possuir cadastro de clientes, para anunciantes e interessados na locação de veículos;|	ALTA|
|RF-07|	Deve possuir caixa de mensagens com a opção de enviar msg direta ao locador;	|BAIXA|
|RF-08|	As informações devem estar armazenadas com segurança e não podem ser editadas por terceiros;|	ALTA|
|RF-09|	Entregar o maior número de possibilidades entre as informações requeridas;	|MÉDIA|
RF-10	|O site deve possuir um sistema de "match", para que o locatário marque de forma instantânea interesse na opção de locação desejada e para que o locador consiga formalizar o aluguel da forma mais breve possível;	|MÉDIA|
|RF-11|	Feito a busca das ofertas disponíveis, o usuário pode criar uma alerta para o período desejado, a fim de saber atualizações de novas disponibilidades de veículos;	|ALTA|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
