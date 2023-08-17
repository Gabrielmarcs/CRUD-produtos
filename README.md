# Projeto de Gestão de Produtos - Documentação

Este é o README para o projeto de Gestão de Produtos, composto por uma aplicação backend desenvolvida utilizando o Spring Boot e um frontend construído com React JS. A aplicação oferece recursos completos para gerenciar informações sobre produtos, incluindo a capacidade de listar, cadastrar, alterar e remover produtos.

## Tecnologias Utilizadas

### Backend (Spring Boot)

- Java
- Spring Boot
- Spring Data JPA
- H2 Database (em memória)
- Lombok

### Frontend (React JS)

- React JS
- JavaScript
- HTML
- CSS
- Axios (para realizar chamadas à API)

## Estrutura do Projeto

O projeto é dividido em duas partes: o backend desenvolvido com Spring Boot e o frontend construído com React JS.

### Backend (Pasta "produtos")

O backend da aplicação foi desenvolvido utilizando o Spring Boot e está localizado na pasta "produtos". Ele inclui as seguintes partes principais:

- Controle: Gerencia os endpoints da API e a lógica de manipulação dos dados.
- Modelo: Define as classes que representam os objetos de domínio da aplicação, como o modelo de produto e a resposta padrão.
- Repositório: Abstrai as operações de acesso aos dados do produto.
- Serviço: Implementa a lógica de negócio da aplicação, como listagem, cadastro, alteração e remoção de produtos.

### Frontend (Outras Pastas)

O frontend da aplicação foi construído com React JS e está localizado nas demais pastas. Ele se comunica com o backend por meio de chamadas de API e apresenta as informações de forma amigável ao usuário. Embora não seja fornecida uma explicação completa sobre o frontend neste README, ele oferece uma interface intuitiva para interagir com a API de gestão de produtos.

## Executando o Projeto

### Backend (Pasta "produtos")

1. Certifique-se de ter o Java e o Maven instalados em sua máquina.
2. Clone o repositório.
3. Navegue até o diretório `produtos` do projeto.
4. Execute o comando `mvn spring-boot:run`.

O backend estará disponível em `http://localhost:8080`.

### Frontend (Outras Pastas)

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Navegue até o diretório do frontend do projeto (outra pasta).
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start`.

O frontend estará disponível em `http://localhost:3000`.

## Considerações Finais

Este README fornece uma visão geral do projeto de Gestão de Produtos, destacando a utilização do Spring Boot no backend e do React JS no frontend. Para obter detalhes específicos sobre cada parte do projeto, consulte os diretórios `produtos` e os demais diretórios do frontend, onde você encontrará documentações e instruções detalhadas sobre a implementação.

Fique à vontade para explorar, expandir e personalizar o projeto para atender às suas necessidades. Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato. Agradecemos por usar nossa aplicação!
