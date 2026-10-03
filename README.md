# PrimeiraEntregaFatec
Programa básico para controle de despesas em typescript
## Instalação
Para utilizar, você precisa ter o node instalado. Caso não tenha, rode em seu terminal:
`apt-get install node`

Feito isto, clone este repositório em diretório/pasta que desejar
`git clone https://github.com/StellaThimoty/PrimeiraEntregaFatec`
instale as dependências
`npm install`
e execute o projeto
`npm run dev`

## Testes
para testar, basta rodar
`npm run test`

## Explicação dos arquivos de configuração
''package.json'' e ''package-lock.json'' - Lista com os pacotes necessários para executar este projeto
''tsconfig.json'' - Lista de opções para o compilador de typescript seguir quando for transpilar o nosso código de ts para js
''.gitignore'' - Lista de arquivos e diretórios para não serem incluídos neste repositório, gerado automaticamente

## Reflexões

Não foram acessadas, utilizadas ou consultadas LLMs neste projeto. Todo o código aqui presente foi escrito e testado 'na mão'. Eu teria utilizado LLM para fazer os testes, mas como requisito obrigatório deste projeto, foi especificado que o teste deve ser escrito pela pessoa e não pela LLM, correspondendo a este pedido, os testes também foram escritos de maneira manual. Os "truques" com array são coisas que eu já havia feito em outros projetos anteriores, tratando-se de programação funcional e lidar com listas, torna-se uma maneira mais intuitiva de se agir... Gosto de programar assim. Inicialmente até havia cogitado criar uma classe como se fosse uma controller, mas rapidamente percebi que não haveria necessidade de fazer isso para o escopo deste projeto... No caso de haver uma DB, é o caminho que eu teria seguido