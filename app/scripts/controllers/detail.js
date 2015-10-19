'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('DetailCtrl', function ($scope, Utils) {
    
    // método retorna um array de 'num' posições para que o ng-repeat itere para exibição das estrelas
    $scope.utils = Utils;
    
    // dataset provisório e desejavel para renderização dos detalhes de uma receita
    $scope.dataSet = {
        id: 0,
        name: "Escondidinho de frango",
        mainImg: "",
        time: "30min",
        rating: 4,
        portion: 5,
        author: "Julyane Zeviane",
        ingredients: [
            {
                part: "Massa",
                items: [
                    "6 batatas grandes",
                    "1 e 1/2 cebolas picadinhas",
                    "2 colher de manteiga",
                    "5 colheres de sopa de requeijão",
                    "1 pitada de sal"
                ]
            },
            {
                part: "Recheio",
                items: [
                    "1 peito de frango Seara desfiado",
                    "1 lata de extrato de tomate",
                    "1/2 lata de creme de leite sem soro",
                    "5 colheres de sopa de requeijão",
                    "200 g de queijo ralado",
                    "sal, cebola, pimenta-do-reino a gosto"
                ]
            }
        ],
        preparation: [
            {
                part: "Massa",
                items: [
                    "Cozinhe as batatas",
                    "Após cozidas tire a casca e amasse",
                    "Em uma panela coloque a manteiga e a cebola para fritar e coloque a batata, desligue após 2 minutos",
                    "Em uma forma unte com manteiga e espalhe a batata, em cima da batata jogue o requeijão"
                ]
            },
            {
                part: "Recheio",
                items: [
                    "Em uma panela frite alho, cebola e coloque o frango Seara",
                    "Em seguida tempere com sal, pimenta-do-reino a gosto, jogue o extrato de tomate, depois que ela ferver jogue o creme de leite",
                    "Espalhe o recheio por cima das batatas e coloque o queijo ralado",
                    "Deixe no forno por 5 minutos",
                    "Se quiser adicionar batata palha fica muito bom"
                ]
            }
        ],
    
    }

  });
