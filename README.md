## App com react-native e typescript

### Criando projeto

~~~bash

npx create-expo-app@latest --template
~~~

https://icons.expo.fyi/Index

npx expo install @react-native-async-storage/async-storage

O AsyncStorage é uma API utilizada principalmente em aplicações React Native para armazenamento persistente de dados de forma assíncrona. Funciona como uma espécie de banco de dados simples, permitindo que você salve e recupere dados no dispositivo do usuário de maneira eficiente. Aqui estão os principais pontos:

1. **Assíncrono:** As operações de leitura e escrita não bloqueiam a thread principal da aplicação, o que é crucial para manter a responsividade e a fluidez da interface do usuário.

2. **Chave-Valor:** Os dados são armazenados como pares chave-valor, onde cada item armazenado precisa de uma chave única para ser identificado.

3. **Persistência:** Os dados são persistidos localmente no dispositivo do usuário, o que significa que eles permanecem mesmo depois que o aplicativo é fechado.

4. **Limitações:** O AsyncStorage tem algumas limitações, como tamanho máximo de armazenamento e falta de suporte para estruturas complexas de dados diretamente (como objetos JavaScript). Para armazenar objetos complexos, é comum serializá-los para JSON antes de salvar.

5. **Uso Comum:** É frequentemente utilizado para armazenar tokens de autenticação, preferências do usuário, configurações do aplicativo e outros dados que precisam ser acessados rapidamente.

Em resumo, o AsyncStorage é uma ferramenta poderosa para gerenciar dados locais de forma assíncrona em aplicações móveis React Native, proporcionando uma experiência de usuário mais fluida e responsiva.

Baseado em
          chave : valor

name: Fulano

links: [
    {
        name: "fulano"
    },
    {
        name: "Ciclano"
    }
]