# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar/blob/master/docs/img/diagrams/diagrama_componentes.png">

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Veículos** - seção de anúncios de veículos disponíveis para aluguel.
     - **Propostas** - registro de todas as solicitações de aluguel já efetuadas pelo usuário.
     - **Dados do usuário** - seção que contém os dados do usuário, disponíveis para visualização e edição.
     - **Favoritos** - lista de veículos salvos como favoritos para acessar posteriormente.

- **API de terceiros** - plataforma que permite o acesso a todos os dados exibidos no site.

- **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


## Hospedagem

O site será hospedado na plataforma do GitHub Pages, sendo mantido no ambiente via URL: https://username.github.io

A publicação do site no GitHub pages é feita por meio de uma sincronização da branch main do repositório com o serviço.

https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar
