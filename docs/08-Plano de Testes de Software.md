**Plano de Testes de Software**

Introdução

Este documento descreve os requisitos a serem testados, os tipos de testes definidos para cada iteração, os recursos a serem empregados e o cronograma dos testes ao longo do projeto. 

Os requisitos para realização dos testes de software são:

* Site publicado na Internet 
* Navegador da Internet - Chrome, Firefox ou Edge 
* Conectividade de Internet para acesso às plataformas (APISs) 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.


|**Caso de Teste**|**CT-01 Tela do usuário**|
| :-: | :-: |
|**Requisitos Associados**|Apresenta a página inicial, cujo menu possui 5 ferramentas: *Home*, *Login,* *Frota, Documentos, Ofertas e Pagamentos*. |
|**Objetivo do Teste**|Verificar se a página “Frota” e Ofertas internamente acessam a página Login e Documentos.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Selecionar a categoria do veículo ou oferta desejada|
||4) Visualizar os valores e detalhes da locação|
||5) Clicar em “*Login*” no menu|
||6) Fazer “login” ou “cadastrar” para iniciar o processo de locação|
||7) Clicar no botão “Logar” ou “Cadastre-se”|
|**Critérios de Êxito**|As páginas dos passos anteriores devem estar responsivas, com todas as imagens sendo carregadas corretamente.|
  
  
|**Caso de Teste**|**CT-02 Confirmar seleção de categoria e ofertas para aluguel de veículos**|
| :-: | :-: |
|**Requisitos Associados**|<p>RF-03 e RF-04</p><p>A tela principal apresenta um formulário solicitando e-mail e senha do usuário para que ele possa logar no sistema. Os campos devem ser preenchidos com dados previamente cadastrados. Caso o usuário não possua o cadastro no sistema, um alerta solicitará o cadastro.</p>|
|**Objetivo do Teste**|Verificar se as caixas da página para selecionar uma categoria e ofertas estão acessíveis.|
||**Passos**|
||1) Acessar o Navegador.|
||2) Informar o endereço do Site: <https://github.com/ICEI-PUC-Minas-PMV-ADS/DriveMyCar>|
||3) Visualizar a página principal.|
||4) Entrar nas abas “Frota” e posteriormente “Ofertas”|
||5) Selecionar a opção desejar|
|||
||7) Visualizar se a informação está correta.|
|**Critérios de Êxito**|<p>Ao selecionar a categoria, será exibida a página com preços e detalhes dos veículos disponíveis para aluguel.</p><p>As páginas devem estar responsivas.</p>|


| **Caso de Teste** | **CT-03 Confirmação dos dados cadastrais e Upload de documentos**| **Status**|
|---|---|---|
| Requisitos Associados|•RF-05 O sistema deve disponibilizar um formulário de cadastro do cliente, para coletar e validar o nome completo, CPF, data de nascimento, endereço e upload dos documentos necessarios para locação; | Em andamento|
|Objetivo de Teste | Verificar se os campos da pagina estão funcionando corretamente e estão permitindo o registro das informações dos clientes corretamente.| Em análise |
| Passos | 1) Abra o navegador.<br/> 2) Informe o endereço do site desejado. <br/> 3) Clique no botão de _login_, localizado no menu de navegação; <br/>  4)Preencha os campos com o e-mail e senha cadastrados;<br/> 5) Clique em _entrar_. <br/> 6) Após selecionar o veiculo, clique em prosseguir para pagina de Documentos e contrato| Página vericada <br/> <span style="color:red">(falta parte do Login)|
|Critéritos de Êxito| •A plataforma deve prosseguir para a tela de pagamento após validar dados do cadastro e receber o upload dos documentos. Sendo assim, o cliente já pode prosseguir com a contratação da locação seguindo para a tela de pagamento na plataforma com as informações inseridas já preenchidas. | Em validação com a proxima página.|
  

**Ferramentas de Testes**

Para realizar os testes e verificar a responsividade das páginas, foram utilizados:

* Computadores 
* Celulares Android e iOS 
* Debugging Visual Studio Code 
* Ferramenta de inspeção do Google Chrome 


