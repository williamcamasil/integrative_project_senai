# Projeto Integrado Senai



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



