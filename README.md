# Projeto Integrado Senai



## Ferramentas utilizadas

* SpringBoot
* Eclipse
* MySql
* Angular



### Backend [Spring Boot]

Para iniciar o projeto em backend foi criado no [spring initializr](https://start.spring.io/) o projeto babyfix, com as seguintes dependencias:

* Spring Boot DevTools
* Spring Web
* Spring Data JPA
* MySQL Driver
* Validation

No eclipse o projeto foi aberto usando maven, a qual foi criado 3 pacotes dentro do src/main/java

* br.com.babyfix.controller
* br.com.babyfix.model
* br.com.babyfix.repository

Onde foi inserido o código com o CRUD de veículos. Além disso dentro de src/main/resources, no arquivo application.properties, foi inserido o seguinte código para configuração do projeto com o BD MySQL. Para esse projeto foi necessário criar um banco chamado ***Babyfix*** dentro do Workbench do mysql, com o seguinte script:

```mysql
create database babyfix;
use babyfix;
select * from tb_veiculo;
insert into tb_veiculo (ano, km, marca, modelo) values (2010, 102365, "GM", "Celta");
drop database babyfix;
```

Nesse caso só é levado em consideração para funcionar o projeto apenas a criação do database. Os demais serviram para testes.

Realizado todas as configurações comentadas acima e criado o BD, basta executar o projeto no eclipse [Run As > Java Application]

#### Postman

***Teste do CRUD no Postman***

GET > http://localhost:8080/api/veiculos

POST > http://localhost:8080/api/cadastrar

```json
{
    "id": 2,
    "marca": "Fiat",
    "modelo": "Uno",
    "ano": 2003,
    "km": 221458
}
```

PUT > http://localhost:8080/api/editar/2

```json
{
    "id": 2,
    "marca": "Fiat",
    "modelo": "Uno",
    "ano": 2021,
    "km": 0
}
```

DELETE > http://localhost:8080/api/veiculos/2



**OBS:** Sempre executar o projeto no eclipse para funcionar corretamente no Frontend

----

### Frontend [Angular]

#### Comando utilizados 

```
# criação de componentes
ng g c menu
ng g c mural-veiculos
ng g c painel-veiculos
ng g c rodape

# criação de serviços
ng g s veiculos

# criar aplicação
ng new babyfix

# rodar o app angular
ng serve
```



#### Arquitetura

````
app
	app-routing
	menu
	models
	mural-veiculos
	painel-veiculos
	rodape
	app.component.html
	app.module.ts
	veiculos.service.ts
````

**Responsabilidades**

* app-routing: gestão das urls de acesso
* menu: componente com o menu para acessar outras páginas
* models: classe modelo com as propriedades relacionadas ao veiculo
* mural-veiculos: componente com o mural de veiculos listados
* painel-veiculos: componente com o painel de veiculos para cadastro / atualizar e deletar
* rodape: componente com o rodape para mais informações
* app.component.html: componente principal para dar acesso as demais páginas
* app.module.ts: todos os modulos e componentes da aplicação
* veiculos.service.ts: serviço de veículo para gerir as requisições REST API



#### Como testar

Para rodar a aplicação, basta clonar o projeto, acessar a base do projeto pelo VSCode, abra o teminal e use o comando **npm install** a qual irá instalar as dependências do angular. Feito isso basta digitar no terminal o comando **ng serve**. Será habilitado a seguinte url para acesso via browser (http://localhost:4200/mural)

