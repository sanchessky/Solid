# Solid
SOLID é um acrônimo mnemônico que relaciona um tópico de boas práticas de programação a cada letra. A aplicação desses princípios tem por objetivo deixar o projeto mais coeso, reaproveitável e torna a sua manutenção mais simples.




# 📚 Projeto de Sistema para Livraria (Princípio Open/Closed)

Este projeto tem como objetivo modelar um sistema de gerenciamento para uma livraria, seguindo o princípio **Open/Closed** da programação orientada a objetos: **aberto para extensão, mas fechado para modificação**.

---

## 🧩 Objetos do Sistema

### 🧑 Pessoa (Classe Pai)
Campos:
- `id`
- `nome`
- `cpf`
- `email`
- `telefone`
- `endereco` (associado)

### 👤 Cliente (Herda Pessoa)
- `aniversario`

### 👨‍💼 Funcionário (Herda Pessoa)
- `cargo`
- `salário`

### 🧑‍🎨 Autor (Herda Pessoa)
- `gênero_literário`

### 🏠 Endereço
Campos:
- `tipo_logradouro`
- `logradouro`
- `número`
- `cep`
- `bairro`

### 📦 Produto
Campos:
- `id`
- `nome`
- `descrição`
- `preço`

### 💰 Venda
Campos:
- `id`
- `cliente`
- `funcionário`
- `data_hora`

### 🛒 Item Vendido
Campos:
- `id`
- `venda`
- `produto`
- `quantidade`

### 💳 Pagamento
Campos:
- `id`
- `venda`
- `total_pagar`

---

## ✅ Requisitos Funcionais

As operações disponíveis para os objetos do sistema são:

- ✅ Cadastrar  
- 📝 Atualizar  
- 🔍 Pesquisar  
- 📃 Listar  
- ❌ Apagar  

---

## 🧱 Estrutura SQL das Tabelas

### `cliente`
```sql
CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  id_endereco INT NOT NULL,
  aniversario DATE NOT NULL
);
```

### `autor`
```sql
CREATE TABLE autor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  id_endereco INT NOT NULL,
  genero_literario VARCHAR(30)
);
```

### `funcionario`
```sql
CREATE TABLE funcionario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  id_endereco INT NOT NULL,
  cargo VARCHAR(50) NOT NULL,
  salario DECIMAL(7,2)
);
```

### `venda`
```sql
CREATE TABLE venda (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL,
  id_funcionario INT NOT NULL,
  date_hora DATETIME DEFAULT CURRENT_TIMESTAMP()
);
```

### `itensvendido`
```sql
CREATE TABLE itensvendido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_venda INT NOT NULL,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL
);
```

### `pagamento`
```sql
CREATE TABLE pagamento (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_venda INT NOT NULL,
  total_pagar DECIMAL(7,2) NOT NULL
);
```

### Relacionamentos com a tabela `endereco`
```sql
ALTER TABLE cliente
ADD CONSTRAINT fk_cliente_pk_endereco
FOREIGN KEY (id_endereco) REFERENCES endereco(id);

ALTER TABLE autor
ADD CONSTRAINT fk_autor_pk_endereco
FOREIGN KEY (id_endereco) REFERENCES endereco(id);

ALTER TABLE funcionario
ADD CONSTRAINT fk_funcionario_pk_endereco
FOREIGN KEY (id_endereco) REFERENCES endereco(id);
```

---

## 🔧 Docker

Comandos úteis:
```bash
docker ps -a         # Lista todos os containers
docker rm -f <id>    # Remove container forçadamente
```

---

## 📬 Exemplo de Requisição (JSON)

```json
{
  "nome": "São João",
  "cpf": "123",
  "email": "joãosao@teste.com",
  "telefone": "(11)4002-5622",
  "endereco": {
    "id": 1,
    "tipo_logradouro": "Rua",
    "logradouro": "Maresias",
    "numero": "77",
    "complemento": "Casa da frente",
    "cep": "147788",
    "bairro": "Vila Alegre"
  },
  "aniversario": "2002-5-15"
}
```

---

## 📌 Observação

Em Breve !!!!!!

---

## 👨‍💻 Autor Thiago Sanches

Desenvolvido com foco em boas práticas de design de software e modelagem de dados.

