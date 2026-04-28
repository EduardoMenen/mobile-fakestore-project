# Mobile FakeStore Project

Aplicativo mobile desenvolvido em **React Native** com **Expo**, consumindo dados da [Fake Store API](https://fakestoreapi.com/). Trabalho acadêmico da disciplina de Projeto, Design e Engenharia de Processos.

## 📱 Funcionalidades

- Autenticação de usuário consumindo a API
- Listagem de produtos com imagem, título e preço formatado em Real (R$)
- Filtro por categorias com opção de limpar
- Tela de detalhes do produto com descrição completa
- Tela de informações dos integrantes do grupo
- Logout com confirmação
- Tratamento de erros e estados de carregamento (`ActivityIndicator`)

## 🛠️ Tecnologias utilizadas

- React Native (com Expo)
- JavaScript
- React Navigation (Stack Navigator)
- Axios
- AsyncStorage

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20.x ou superior)
- [Git](https://git-scm.com/)
- App **Expo Go** instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/EduardoMenen/mobile-fakestore-project.git
   cd mobile-fakestore-project
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npx expo start
   ```

4. **Abra o app:**
   - **No celular:** abra o app Expo Go e escaneie o QR Code que aparece no terminal
   - **No emulador Android:** pressione `a` no terminal
   - **No simulador iOS:** pressione `i` no terminal

## 🔐 Como verificar usuários disponíveis para login

A autenticação utiliza usuários reais cadastrados na Fake Store API. Para listar todos os usuários disponíveis, basta acessar:

```
https://fakestoreapi.com/users
```

### Exemplos de credenciais válidas para teste

| Username   | Password    |
|------------|-------------|
| johnd      | m38rmF$     |
| mor_2314   | 83r5^_      |
| kevinryan  | kev02937@   |
| donero     | ewedon      |

> A lista completa de usuários pode ser consultada no endpoint `/users` indicado acima.

## 👥 Integrantes do grupo

| Nome completo               | RA        |
|-----------------------------|-----------|
| Eduardo Menenegazzo Riboli  | 1136488   |
| Caio do Prado Stachelski    | 1137003   |
| Jean Demarchi               | 1136156   |
| Vitor Valduga Modesti       | 1136127   |

## 📁 Estrutura do projeto

```
mobile-fakestore-project/
├── App.js
├── src/
│   ├── api/
│   │   ├── client.js          # Configuração do axios
│   │   ├── auth.js            # Autenticação (getUsers, login)
│   │   └── products.js        # Funções de produtos
│   ├── components/
│   │   ├── Loading.js
│   │   ├── ProductCard.js
│   │   └── CategoryFilter.js
│   ├── navigation/
│   │   └── AppNavigator.js    # Stack Navigator
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   ├── ProductDetailScreen.js
│   │   └── GroupInfoScreen.js
│   └── utils/
│       └── formatPrice.js     # Formatação de preço em R$
├── package.json
└── README.md
```

## 📚 Endpoints da API utilizados

- `GET /users` — Lista de usuários (consultada antes do login)
- `POST /auth/login` — Autenticação
- `GET /products` — Lista de todos os produtos
- `GET /products/{id}` — Detalhes de um produto específico
- `GET /products/categories` — Lista de categorias disponíveis
- `GET /products/category/{categoria}` — Produtos de uma categoria específica