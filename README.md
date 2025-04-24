## 📱 Projeto: App Links com React Native + TypeScript

O repositório [app-links-react-native](https://github.com/felipeisraelsantos/app-links-react-native) é um projeto desenvolvido com **React Native** e **TypeScript**, utilizando o framework **Expo**. O objetivo principal é demonstrar como gerenciar e manipular links dentro de um aplicativo móvel, oferecendo uma base sólida para implementações de deep linking e armazenamento local.

**App com react-native e typescript**

Caso queira criar projeto com react-native e typescript

~~~bash

npx create-expo-app@latest --template
~~~

### 🚀 Tecnologias e Ferramentas Utilizadas

- **React Native com Expo** Facilita o desenvolvimento e a execução do aplicativo em múltiplas plataforma.
- **TypeScript** Proporciona tipagem estática, melhorando a qualidade e a manutenção do códig.
- **AsyncStorage** Utilizado para armazenar dados localmente no dispositivo do usuário de forma assíncrona e persistent.

O AsyncStorage é uma API utilizada principalmente em aplicações React Native para armazenamento persistente de dados de forma assíncrona. Funciona como uma espécie de banco de dados simples, permitindo que você salve e recupere dados no dispositivo do usuário de maneira eficiente. Aqui estão os principais pontos:

1. **Assíncrono:** As operações de leitura e escrita não bloqueiam a thread principal da aplicação, o que é crucial para manter a responsividade e a fluidez da interface do usuário.

2. **Chave-Valor:** Os dados são armazenados como pares chave-valor, onde cada item armazenado precisa de uma chave única para ser identificado.

3. **Persistência:** Os dados são persistidos localmente no dispositivo do usuário, o que significa que eles permanecem mesmo depois que o aplicativo é fechado.

4. **Limitações:** O AsyncStorage tem algumas limitações, como tamanho máximo de armazenamento e falta de suporte para estruturas complexas de dados diretamente (como objetos JavaScript). Para armazenar objetos complexos, é comum serializá-los para JSON antes de salvar.

5. **Uso Comum:** É frequentemente utilizado para armazenar tokens de autenticação, preferências do usuário, configurações do aplicativo e outros dados que precisam ser acessados rapidamente.

Em resumo, o AsyncStorage é uma ferramenta poderosa para gerenciar dados locais de forma assíncrona em aplicações móveis React Native, proporcionando uma experiência de usuário mais fluida e responsiva.

```
Baseado em chave : valor

name: Fulano

links: [
    {
        name: "fulano"
    },
    {
        name: "Ciclano"
    }
]
```

- **Expo Icons** Para a inclusão de ícones personalizados na interface do aplicativo.
https://icons.expo.fyi/Index

### 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
app-links-react-native/
├── .vscode/
├── assets/
│   └── images/
├── src/
├── .editorconfig
├── .gitignore
├── README.md
├── app.json
├── package-lock.json
├── package.json
├── tsconfig.json
```
- **assets/images/*: Contém as imagens utilizadas no aplicatio.
- **src/*: Diretório principal onde reside o código-fonte da aplicaço.
- **package.json*: Gerencia as dependências e scripts do projeo.
- **tsconfig.json*: Configurações específicas do TypeScrit.

### 🧠 Funcionalidades Implementadas

- **Gerenciamento de Links**: Permite adicionar, editar e excluir links dentro do aplicatvo.
- **Armazenamento Persistente**: Utiliza o AsyncStorage para salvar os links, garantindo que os dados permaneçam mesmo após o fechamento.
- **Interface Intuitiva**: Design simples e funcional para facilitar a navegação e a usabilidde.

### 📦 Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/felipeisraelsantos/app-links-react-native.git
   cd app-links-react-native
   ```
2. **Instale as dependências**:

   ```bash
   npm install
   ```
3. **Instale o AsyncStorage**:

   ```bash
   npx expo install @react-native-async-storage/async-storage
   ```
4. **Inicie o aplicativo**:

   ```bash
   npx expo start
   ```

Após esses passos, você poderá visualizar e interagir com o aplicativo em um emulador ou dispositivo físico.

### 📌 Considerações Finais

Este projeto serve como uma excelente base para desenvolvedores que desejam entender e implementar o gerenciamento de links em aplicativos React Native. Com uma estrutura clara e o uso de tecnologias modernas, é um ponto de partida ideal para expandir funcionalidades relacionadas a deep linking e armazenamento local.