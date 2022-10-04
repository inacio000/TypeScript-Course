## O que é...
* TypeScript é um superset para a linguagem JavaScript;
* Ou seja, adiciona funções ao JavaScript, como a declaração de tipos de variáveis;
* Pode ser utilizada com frameworks/libs, como: Express e React;
* Precisa ser compilado em JavaScript, ou seja , não executamos TS;
* Desenvolvido e mantido pela Microsoft;
#

## Por que TypeScript?
* Adiciona confiabilidade ao programa (tipos);
* Provê novas funcionalidades ao JavaScript, como interfaces (modelos para classes);
* Com o TS podemos verificar os erros antes da execução do código;
* Deixa JavaScript mais explicito, diminui a quantidade de bugs;
* Por estes e outros motivos perdemos menos tempo com debugs;
#

## Instalação do TypeScript
* Para instalar o TypeScript vamos utilizar o npm;
* O nome do pacote é typescript;
* E vamos adicionar de forma global com o flag -g;
* A partir da instalação temos como executar/compilar o TS  em qualquer local da nossa máquina, com o comando tsc;
#
### Arquivo de confuração TS
* É criado com o seguinte comando: 
>    tsc --init
#
## Compilação automática
> tsc -w
* Qualquer alteração feita no ficheiro .ts será refletido no .js 
#
# Interfaces
* Em TS, interfaces padronizam estruturas para ser reutilizado como tipo