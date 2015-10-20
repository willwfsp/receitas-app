# Receitas de Solteiro

## Pré-instalação
Tenha instalado no seu computador o [Nodejs](https://nodejs.org/en/)

## Instalação
1. Através do `nodejs` instale o `grunt` e o `bower`

```

npm install -g grunt grunt-cli bower
```

2. Navege para a pasta raiz do projeto e instale as dependências
```
#na pasta receitas-app

npm install
```

```
#na pasta receitas-app

bower install
```

## Build & Desenvolvimento

Execute `grunt` para building e `grunt serve` para o preview do app.

## Testing

Executando `grunt test` irá realizar os testes unitários usando o "karma".
