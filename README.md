# Teste full stack

## Sobre o teste

A aplicação será uma ferramenta simples para gerenciamento de tarefas, que deve permitir:

- Adicionar/editar/deletar uma tarefa
- Marcar/desmarcar o estado de pronto de uma tarefa

O objetivo do teste não é avaliar se foi feita uma solução com o melhor código e/ou mais performático. Queremos avaliar principalmente a sua capacidade de entender e resolver um problema proposto, utilizando diferentes tecnologias para isso. Não se preocupe quanto ao tempo do teste, leve o tempo que achar necessário para entregar a solução completa.

Não é obrigado a utilização de uma linguagem/framework em específico, mas por aqui nós usamos:

- PHP com Laravel
- Node
- JS/TS
- React

Então se possível, será interessante que você demonstre ter domínio sobre alguns desses itens, mas caso não tenha, não tem problema, utilize o que for mais confortável para você.

## Funcionalidades

Na tela inicial, deve ser exibido um input que permite a adição de uma nova tarefa, contendo apenas o título.

Abaixo da barra de input, deve ser adicionado uma listagem que exibe todas as tarefas criadas, e que permite interagir com as mesmas. Deve ser possível fazer as seguintes operações em uma tarefa:

- Editar o título
- Deletar
- Marcar/desmarcar o estado de pronto

Todas as alterações feitas devem ser persistidas em uma API, de forma que caso a página seja recarregada, o estado das tarefas seja restaurado.

## Requisitos básicos

Os requisitos básicos devem ser satisfeitos, e pesaram muito na avaliação do teste.

- Crie um fork deste projeto (https://github.com/bcopy-io/full-stack-test) e o deixe privado
- Adicione @Gabrielbdd como colaborador do repositório. Você pode fazer isto em "https://github.com/`your-github-user-name`/foam/settings/access"
- O projeto deve possuir um README com instruções básicas de como rodar a aplicação
- Deve ser possível realizar todas as operações descritas acima
- O front end deve comunicar com uma API para persistir as informações. Não é necessário utilizar banco de dados, as informações podem ser persistidas em memória

## Requisitos adicionais

Requisitos adicionais contam pontos extras na avaliação, mas não são obrigatórios.

- As páginas devem ficar responsivas, se ajustando aos diferentes tamanhos de tela de forma que nenhum elemento fique cortado
- Ter documentação da API utilizando Open API (ex: Exibindo o Swagger UI na rota /openapi)
- Escrever testes unitários para as regras mais importantes, no front end e backend
- Faça commits pequenos e com títulos significativos

## O que será avaliado

Avaliaremos principalmente a resolução do problema, a solução deve satisfazer minimamente tudo o que foi solicitado nos [Requisitos básicos](#requisitos-básicos).

Será analisado como a solução foi construída, e neste ponto, veremos como o front end e o back end foram arquitetados dado o problema:

- Como os projetos foram organizados
- Como as entidades/modelos se comunicam
- Como é separado as diferentes responsabilidades por camadas (ex: não é legal um controller interagir com um banco de dados/repositório diretamente)

Olharemos também como foram utilizadas as tecnologias presentes na solução. E apesar de não ser necessário, gostamos de ver coisas mais novas (ex: nova versão de linguagem e frameworks) sendo utilizadas em todo seu potencial.
Queremos entender aqui o quanto você domina a stack utilizada.

Por fim, vamos avaliar como boas práticas de código foram utilizadas, como:

- Aplicações de SOLID
- Design patterns
- Clean code

Não nos preocupamos que todos esses detalhes estejam perfeitos, mas serão muito bem vistos sem bem aplicados.


