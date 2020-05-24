## Twitter Hashtag Monitor

### Tela Principal

![Monitor-Hashtags-Approved](https://github.com/FelipePbi/twitter_hashtag_monitor_front_end/blob/master/screenshots/monitor_tweets_approved_2.PNG)
![Monitor-Hashtags-Painel-Control](https://github.com/FelipePbi/twitter_hashtag_monitor_front_end/blob/master/screenshots/painel_control_2.PNG)

## Sobre este projeto

A ideia do aplicativo é referente a um desafio proposto a mim, com o seguinte contexto:

_"Um diretor de TV precisa exibir em um telão, os tweets que chegam contendo uma determinada hashtag que varia diariamente. Foi pedido que esses tweets fossem inseridos no telão por um controle: Através de um sistema web que seria comandado pelo pessoal de operações do estúdio, neste caso o mesmo deveria aprovar os tweets que estão chegando para que o mesmo seja exibido. Para essa exibição, deverá obrigatoriamente ter efeito de transição entre os tweets que foram aprovados no sistema de controle."_

## Algumas observações sobre este projeto

1 - Esta aplicação não foi desenvolvida para ser utilizada em monitores pequenos ou smartphones, portanto haverá desconfigurações de layout, caso acessada por estes.

2 - Não há funcionalidade de login/registro.

3 - Todas atualizações da aplicação é realizada em tempo real para todos usuários conectados na mesma.

4 - Recomendada a utilização do navegador Google Chrome.

5 - A navegação entre as telas é feita atráves dos botões no canto superior direito.

## Funcionalidades

- Tela principal:

  - Somente será mostrados os tweets que forem aprovados no painel de controle.
  - O layout de exibição dos tweets utilizado é o _Mosaic Layout_.
  - Está tela é somente para exibição.

- Painel de Controle:

  - Possibilidade de Monitorar em tempo real determinadas hashtags que são tweetados no [Twitter](https://twitter.com/).
  - Somente serão recebidos os tweets que forem criados a partir do momento que o monitoramento for iniciado.

  - Os tweets monitorados serão exibios na coluna 'Tweets Recebidos'.

    - Tweets recebidos podem ser Aprovados e Reprovados clicando nos respectivos botãos na parte superior do tweet.

  - Os tweets aprovados serão exibios na coluna 'Tweets Aprovados'.

    - Tweets recebidos serão mostrados em tempo real na 'Tela Principal'.
    - Tweets recebidos podem ser Reprovados clicando no respectivo botão na parte superior do tweet.

  - Os tweets reprovados serão exibios na coluna 'Tweets Reprovados'.

    - Tweets reprovados podem ser Aprovados clicando no respectivo botão na parte superior do tweet.

## Começando

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará de um ambiente básico para executar um aplicativo React.JS, que pode ser encontrado [aqui](https://reactjs.org/docs/getting-started.html).

Além disso, você precisará do servidor em execução localmente em sua máquina. Você pode encontrar o servidor e todas as instruções para iniciar o servidor [aqui](https://reactjs.org/docs/getting-started.html).

### Instalando

**Clonando o Repositório**

```
$ https://github.com/FelipePbi/twitter_hashtag_monitor_front_end

$ cd twitter_hashtag_monitor_front_end
```

**Instalando dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

### Conectando o aplicativo ao servidor

1 - Siga as instruções no servidor [twitter_hashtag_monitor_beck_end](ttps://github.com/FelipePbi/twitter_hashtag_monitor_beck_end) para que o servidor esteja sendo executado em sua máquina.

2 - Com o servidor em funcionamento, acesse o arquivo [src / configs / api.js](https://github.com/FelipePbi/twitter_hashtag_monitor_front_end/blob/master/src/configs/defaultConfig.js) e edite o valor do campo baseURL (linha 2) com o IP da sua máquina, exemplo _http://localhost:3333_.

### Rodando a aplicação

Com todas as dependências instaladas e o ambiente configurado corretamente, agora você pode executar o aplicativo:

```
$ yarn start
```

## Sobre

Este projeto faz parte do meu portfólio pessoal, portanto, ficarei feliz se você puder me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você possa relatar que possa me tornar um desenvolvedor melhor!

Email: felipexd-2011@hotmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/felipe-borges-pbi/)

Além disso, você pode usar este projeto como desejar, estudar, fazer melhorias ou ganhar dinheiro com ele!

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](https://github.com/steniowagner/bon-appetit-app/blob/master/LICENSE) para obter detalhes
