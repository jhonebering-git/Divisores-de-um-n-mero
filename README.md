# Divisores-de-um-numero


Descrição da atividade:
Um cliente precisa de um sistema que seja capaz de decompor um número em todos os seus divisores, enumerando também aqueles que forem primos.

● Dado um número de entrada, o programa deve calcular todos os divisores que compõem o número.

● Dado um número de entrada, o programa deve calcular todos os divisores primos que compõem o número.


**EXECUTAR NO CONSOLE**


Na pasta do projeto, execute o comando no terminal:
```
$ npm start
```
Digite o valor inteiro real que deseja calcular os divisores e os divisores primos. O resultado será impresso no termial.

![npm-start](https://user-images.githubusercontent.com/85582523/167280505-6816194b-6e0f-4cb8-b497-98fad3b8de0a.png)



**EXECUTAR VIA SERVIÇO**

Na pasta do projeto, execute o comando no terminal para rodar api server:
```
$ npm run server
```
Se a frase `Servidor rodando` for impresso, podemos executar as chamadas.

![npm-run-server](https://user-images.githubusercontent.com/85582523/167280594-4f78fb6c-a951-47ea-a52c-f9c924e7668f.png)

Abra o navegador com as seguintes urls:

```http://localhost:3001/primos/45```
Calcula os divisores primos do número 45

```http://localhost:3001/divisores/45```
Calcula os divisores do número 45



**EXECUTAR TESTES** 

É possível rodar os testes unitários criados através do comando:

```
npm test
```

O resultado irá exibir informações sobre o números de testes realizados, quais foram os testes, o resultado esperado e o resultado do teste.


**DOCUMENTAÇÃO**

Com o serviço api rodando, abra o seguinte endereço para abrir a documentação Swagger:

``` http://localhost:3001 ``` ou ``` http://localhost:3001/docs ```

![Swagger-UI](https://user-images.githubusercontent.com/85582523/167280785-35aa4ca9-4531-4969-b15b-997a9812fe6e.png)


Obs.: Atualmente a documentação não executa os serviços, apenas como as chamadas devem ser construídas, para executar os serviços, rode os endereços diretamente no navegador.

