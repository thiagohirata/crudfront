# Crudfront

O objetivo deste projeto é fornecer componentes integrados que facilitam
o desenvolvimento de operações CRUD (criar, ler, atualizar e remover), 
para serem utilizados no backend e no frontend.

A partir da definição de um modelo de dados, com metadados descrevendo 
como os dados devem ser armazenados, validados e renderizados para os
usuários, os componentes que formam este projeto vão auxiliar no 
desenvolvimento de uma API GraphQL, telas em que os usuários possam
gerenciar no cadastro desses dados e APIs para a geração de relatórios.

## Motivação (na real)

Eu criei este projeto para criar os *meus* componentes, do jeito que
*eu* gosto 🧐 - e para incorporar em novos projetos as ideias que deram
certo em projetos anteriores.

O conceito de gerar quase que automaticamente o frontend e backend de
operações CRUD, com a capacidade de realizar pequenas customizações,
funcionou bem nos meus projetos na Niara. 

## Requisitos do projeto

### Wishlist

   - Internacionalização (frontend)
   - Validação de formulários, inputs
   - Customização visual dos componentes

### Segurança

O Crudfront deve prover meios para o usuário integrar com sua própria
solução de segurança (autenticação, autorização).

### Persistência

O Crudfront proverá soluções prontas para persistência de dados, mas
deverá ser customizável para o usuário integrar o framework à solução
de banco de dados de sua escolha.
