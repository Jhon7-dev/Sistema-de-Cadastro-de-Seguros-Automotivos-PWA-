#  Sistema de Cadastro de Seguros Automotivos (PWA)

Aplicação Fullstack desenvolvida com foco em simular um sistema real de cadastro de seguros de veículos, utilizando tecnologias modernas e conceitos avançados como funcionamento offline (PWA) e integração com APIs externas.

---

##  Demonstração

🔗 Acesse o projeto:
[https://github.com/Jhon7-dev/Sistema-de-Cadastro-de-Seguros-Automotivos-PWA-](https://github.com/Jhon7-dev/Sistema-de-Cadastro-de-Seguros-Automotivos-PWA-)

---

##  Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de aplicar na prática conceitos essenciais do desenvolvimento web moderno, indo além do básico de CRUD.

A aplicação permite cadastrar e listar seguros de veículos, utilizando dados reais de marcas de carros através de uma API externa.

Um dos principais diferenciais é o suporte a funcionamento offline, garantindo que o usuário continue utilizando o sistema mesmo sem conexão com a internet.

---

##  Funcionalidades

*  Cadastro de seguros de veículos
*  Listagem de seguros cadastrados
*  Consumo de API externa (marcas de carros - FIPE)
*  Integração completa entre Front-end e Back-end
*  Detecção de status online/offline
*  Persistência de dados local (offline)
*  Notificações no navegador
*  Aplicação PWA (instalável e funcional offline)

---

## 🛠️ Tecnologias Utilizadas

### Front-end

* Angular
* TypeScript
* RxJS

### Back-end

* Node.js
* Express
* JavaScript

### Outros

* API FIPE (dados de veículos)
* Web Notifications API
* IndexedDB (armazenamento offline)

---

##  Arquitetura do Projeto

O projeto segue uma arquitetura simples, porém bem estruturada:

* **Front-end (Angular):** Interface do usuário, gerenciamento de estado e consumo da API
* **Back-end (Node.js):** API REST para cadastro e listagem de seguros
* **Serviços:** Separação de responsabilidades para comunicação com APIs

---

##  Funcionamento Offline (Diferencial)

A aplicação foi projetada para funcionar mesmo sem conexão com a internet:

* Os dados são armazenados localmente utilizando IndexedDB
* O sistema detecta automaticamente o status da conexão
* Quando offline, o usuário ainda consegue cadastrar dados
* Quando a conexão retorna, os dados podem ser sincronizados

Esse tipo de abordagem é muito utilizado em aplicações modernas que precisam garantir disponibilidade contínua.

---

##  Notificações

Após o cadastro de um seguro, o sistema envia uma notificação ao usuário diretamente no navegador, melhorando a experiência e feedback da aplicação.

---

##  Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* Angular CLI instalado

### 1. Clone o repositório

```bash
git clone https://github.com/Jhon7-dev/Sistema-de-Cadastro-de-Seguros-Automotivos-PWA-
```

### 2. Back-end

```bash
cd backend
npm install
node server.js
```

Servidor rodando em:

```
http://localhost:9000
```

### 3. Front-end

```bash
cd frontend
npm install
ng serve
```

Aplicação disponível em:

```
http://localhost:4200
```

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram trabalha
