# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

| **Caso de Teste** | **CT-00 Confirmação dos dados cadastrais e Upload de documentos**| **Status**|
|---|---|---|
| Requisitos Associados|•RF-05 O sistema deve disponibilizar um formulário de cadastro do cliente, para coletar e validar o nome completo, CPF, data de nascimento, endereço e upload dos documentos necessarios para locação; | Em andamento|
|Objetivo de Teste | Verificar se os campos da pagina estão funcionando corretamente e estão permitindo o registro das informações dos clientes corretamente.| Em análise |
| Passos | 1) Abra o navegador.<br/> 2) Informe o endereço do site desejado. <br/> 3) Clique no botão de _login_, localizado no menu de navegação; <br/>  4)Preencha os campos com o e-mail e senha cadastrados;<br/> 5) Clique em _entrar_. <br/> 6) Após selecionar o veiculo, clique em prosseguir para pagina de Documentos e contrato| Verificado com sucesso|
|Critéritos de Êxito| •A plataforma deve prosseguir para a tela de pagamento após validar dados do cadastro e receber o upload dos documentos. Sendo assim, o cliente já pode prosseguir com a contratação da locação seguindo para a tela de pagamento na plataforma com as informações inseridas já preenchidas. | Em validação com a proxima página.|


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)