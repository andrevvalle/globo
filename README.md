## Características

- Autenticação e autorização de usuários
- Operações CRUD para filmes
- Pesquisa avançada de filmes com múltiplos filtros
- Paginação

## Primeiros Passos

### Pré-requisitos

- Node.js
- PostgreSQL
- Docker (opcional, mas recomendado para ambiente de desenvolvimento)

### Instalação - BACKEND

1. Clone o repositório:
   ```bash
   git clone https://github.com/andrevvalle/globo.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd globo && cd backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e preencha-o com suas credenciais de banco de dados e chaves JWT, conforme fornecido no corpo do e-mail:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
   JWT_PRIVATE_KEY="sua_chave_privada_jwt"
   JWT_PUBLIC_KEY="sua_chave_publica_jwt"
   ```
5. Inicie o serviço PostgreSQL. Se estiver usando Docker, pode executar:
   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
   ```
   Altere `password` para sua senha desejada.
6. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
7. Execute o script de seed:
   ```bash
   npm run seed
   ```
8. Inicie o servidor:
   ```bash
   npm run start
   ```

## Uso

### Criação de uma Conta

Envie uma solicitação POST para `/accounts` com o seguinte corpo JSON:

```json
{
  "name": "John Doe",
  "email": "example@example.com",
  "password": "123456"
}
```

### Autenticação

Envie uma solicitação POST para `/sessions` com o seguinte corpo JSON:

```json
{
  "email": "example@example.com",
  "password": "123456"
}
```

### Criação de um Filme

Envie uma solicitação POST para `/create-movie` com o seguinte corpo JSON:

```json
{
  "title": "Example Movie",
  "year": 2022,
  "director": "John Doe",
  "genre": "Action",
  "actors": ["Actor 1", "Actor 2"]
}
```

---

# Frontend do Projeto

O frontend deste projeto é construído utilizando Next.js, uma popular framework React, e é estilizado com Tailwind CSS. Ele também utiliza Axios para requisições HTTP e Heroicons para ícones.

## Configuração e Execução

### Pré-requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Entre no diretório do frontend:
   ```bash
   cd /globo/frontend
   ```
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

### Desenvolvimento Local

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor Next.js em modo de desenvolvimento, normalmente acessível em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Next.js:** Framework React para aplicações web com renderização do lado do servidor e geração de sites estáticos.
- **React e React DOM:** Bibliotecas JavaScript para criar interfaces de usuário.
- **Tailwind CSS:** Framework CSS para design rápido e responsivo com classes utilitárias.
- **Heroicons:** Conjunto de ícones SVG elegantes e simples.
- **TypeScript:** Linguagem de programação para adicionar tipagem estática ao JavaScript.

---
