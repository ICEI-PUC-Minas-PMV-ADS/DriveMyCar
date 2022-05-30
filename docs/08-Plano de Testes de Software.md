**Plano de Testes de Software**

Os requisitos para realização dos testes de software são:

* Site publicado na Internet 
* Navegador da Internet - Chrome, Firefox ou Edge 
* Conectividade de Internet para acesso às plataformas (APISs) 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|**Caso de Teste**|**Tela Principal**|
| :-: | :-: |
|**Requisitos Associados**|<p>RF-03 e RF-04</p><p>A tela principal apresenta um formulário solicitando e-mail e senha do usuário para que ele possa logar no sistema. Os campos devem ser preenchidos com dados previamente cadastrados. Caso o usuário não possua o cadastro no sistema, um alert solicitará o cadastro.</p>|
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


|**Caso de Teste**|**Tela do usuário**|
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
**Ferramentas de Testes**

Para realizar os testes e verificar a responsividade das páginas, foram utilizados:

* Computadores 
* Celulares Android e iOS 
* Debugging Visual Studio Code 
* Ferramenta de inspeção do Google Chrome 


