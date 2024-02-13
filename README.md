# dados-atletas

🎓 Projeto de certificação 2 DEVstart – Dados dos Atletas

- Resumo do projeto

Criar uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

- Introdução

Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

- Especificações

Deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.

- A classe deverá receber os seguintes atributos:

-- nome
-- idade
-- peso
-- altura
-- notas

- A classe deverá possuir os seguintes métodos:

-- calculaCategoria(), para calcular a categoria do atleta;
-- calculaIMC(), para calcular o IMC do atleta;
-- calculaMediaValida(), para calcular a média válida do atleta.
-- obtemNomeAtleta(), que retorna o nome do atleta
-- obtemIdadeAtleta(), que retorna a idade do atleta
-- obtemPesoAtleta(), que retorna o peso do atleta
-- obtemNotasAtleta(), que retorna as notas do atleta
-- obtemCategoria(), que retorna a categoria do atleta
-- obtemIMC(), que retorna o IMC do atleta
--obtemMediaValida(), que retorna a média válida do atleta

- Utilizar as seguintes regras:

1. Para calcular a categoria

Infantil: 9 a 11 anos
Juvenil: 12 e 13 anos
Intermediário: 14 e 15 anos
Adulto: 16 a 30 anos
Sem categoria: demais idades 2. Para calcular o IMC

Fórmula: imc = peso / (altura x altura) 3. Para calcular a média válida
