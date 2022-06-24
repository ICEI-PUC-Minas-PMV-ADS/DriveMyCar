**Plano de Testes de Software**

Introdução

Este documento descreve os requisitos a serem testados, os tipos de testes definidos para cada iteração, os recursos a serem empregados e o cronograma dos testes ao longo do projeto. 

Os requisitos para realização dos testes de software são:

* Site publicado na Internet 
* Navegador da Internet - Chrome, Firefox ou Edge 
* Conectividade de Internet para acesso às plataformas (APISs) 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.


|**Caso de Teste**|**Teste 01**|
| :-: | :-: |
|**Requisitos Associados**|Testar acesso a página de login e sua funcionalidade. |
|**Objetivo do Teste**|Verificar se após digitar usuário e senha se abre a tela logada.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Selecionar no menu LOGIN|
||4) Inserir usuário e senha|
||5) Clicar em “SUBMIT"|
|**Critérios de Êxito**|Após clicar em SUBMIT deverá aparecer a Tela de "Boas vindas".|

|**Caso de Teste**|**Teste 02**|
| :-: | :-: |
|**Requisitos Associados**|Testar acesso a página de CADASTRO|
|**Objetivo do Teste**|Enviar informções de novo usuário e efetuar login com o novo cadastro.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Selecionar no menu LOGIN|
||3) Selecionar o botão NOVO USUARIO|
||4) Inserir dados solicitados no formulário|
||5) Clicar em "SALVAR"|
|**Critérios de Êxito**|Após clicar em SALVAR deverá aparecer a mensagem "Usuário salvo com sucesso".|
  
  
|**Caso de Teste**|**Teste 03**|
| :-: | :-: |
|**Requisitos Associados**|Testar acesso a página FROTA na área logada|
|**Objetivo do Teste**|Verificar se as caixas da página para selecionar uma categoria e ofertas estão acessíveis.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Fazer LOGIN|
||5) Selecionar a opção FROTA|
|**Critérios de Êxito**|Aparecer as informações da frota disponível.|

|**Caso de Teste**|**Teste 04**|
| :-: | :-: |
|**Requisitos Associados**|Testar acesso a página de FROTA "não-logada" para visualização de categorias|
|**Objetivo do Teste**|Verificar se a página informa detalhes das categorias Standard, Intermediário e Premium.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Selecionar a opção FROTA|
|**Critérios de Êxito**|Aparecer as informações de planos e categorias.|

|**Caso de Teste**|**Teste 05**|
| :-: | :-: |
|**Requisitos Associados**|Testar acesso da página de Cadastro de documentos|
|**Objetivo do Teste**|Verificar se a página possui campos para enviar dados cadastrais e documentos para verificação.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Fazer LOGIN|
||5) Selecionar a opção DOCUMENTOS|
|**Critérios de Êxito**|Aparecer os campos para preenchimento e anexar arquivos|

|**Caso de Teste**|**Teste 06**|
| :-: | :-: |
|**Requisitos Associados**|Testar acesso da página de Pagamentos|
|**Objetivo do Teste**|Verificar se a página possui os campos necessários para envio de informações de pagamento.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Fazer LOGIN|
||5) Selecionar a opção CONTRATAÇÃO|
||6) Selecionar a opção PAGAMENTOS|
|**Critérios de Êxito**|Aparecer os campos para preenchimento do cartão de crédito e dados pessoais|

|**Caso de Teste**|**Teste 07**|
| :-: | :-: |
|**Requisitos Associados**|Testar página de histórico de aluguéis|
|**Objetivo do Teste**|Verificar se a página possui os últimos pedidos realizados|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Fazer LOGIN|
||5) Selecionar a opção MEUS CONTRATOS|
|**Critérios de Êxito**|Aparecer os dados das últimas locações|

|**Caso de Teste**|**Teste 08**|
| :-: | :-: |
|**Requisitos Associados**|Testar funcionalidade calculadora|
|**Objetivo do Teste**|Verificar se a página de cadastro possui acesso para abrir a calculadora de locação.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Fazer LOGIN|
||5) Selecionar a opção DOCUMENTOS|
||6) Clicar no ícone da calculadora|
|**Critérios de Êxito**|Preencher os campos e deve retornar o valor da locação.|

**Ferramentas de Testes**

Para realizar os testes e verificar a responsividade das páginas, foram utilizados:

* Computadores 
* Celulares Android e iOS 
* Debugging Visual Studio Code 
* Ferramenta de inspeção do Google Chrome 


