# 🚀 Esquenta Docker - Full Cycle

Este projeto é um exercício introdutório para aprender a usar **Docker** e **Docker Compose**, utilizando uma aplicação simples em **Golang** com **PostgreSQL** e **Redis**.

## 📌 Tecnologias Utilizadas

- **Golang** 1.24
- **PostgreSQL** 16
- **Redis** (cache)
- **Docker & Docker Compose**

## 📂 Estrutura do Projeto

```
📁 projeto
├── 📄 Dockerfile
├── 📄 docker-compose.yaml
├── 📁 sql
│   ├── 📄 init.sql
├── 📄 main.go
├── 📄 go.mod
├── 📄 go.sum
└── 📄 README.md
```

## 🛠️ Configuração do Ambiente

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Subir os Containers

```sh
docker compose up -d
```

Isso irá iniciar os seguintes serviços:

- **App** (Golang)
- **PostgreSQL** (Banco de dados)
- **Redis** (Cache)

### 3️⃣ Acessar os Containers

```sh
docker compose exec app sh
```

### 4️⃣ Inicializar o Banco de Dados

Se necessário, entre no banco e verifique a tabela:

```sh
docker compose exec postgres psql -U postgres -d imersao
```

```sql
SELECT * FROM produtos;
```

## 🖥️ Endpoints Disponíveis

| Método | Endpoint  | Descrição               |
| ------ | --------- | ----------------------- |
| GET    | /produtos | Lista todos os produtos |

### Exemplo de Resposta

```json
[
  {
    "id": 1,
    "nome": "Produto A",
    "descricao": "Descrição do produto A",
    "preco": 100
  }
]
```

## 🏗️ Estrutura do Código

### 📜 **main.go** (Servidor HTTP)

O código implementa um servidor HTTP simples para listar produtos armazenados no PostgreSQL.

```go
connStr := "host=postgres port=5432 user=postgres password=postgres dbname=imersao sslmode=disable"
db, err := sql.Open("postgres", connStr)
```

### 📜 **docker-compose.yaml** (Orquestração)

Define os serviços **app**, **postgres**, e **redis**.

```yaml
services:
  app:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - postgres
```

## 📜 **Dockerfile** (Build da Aplicação)

```dockerfile
FROM golang:1.24-alpine
WORKDIR /app
COPY . .
CMD ["tail", "-f", "/dev/null"]
```

## 🛑 Parando os Containers

```sh
docker compose down
```
