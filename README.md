# Integração de Formulário do Pipefy

## Configuração

Antes de começar, é necessário configurar o Pipe ID e o Token de Autenticação para acessar o Pipefy API.

### O que é o Pipe ID?

O Pipe ID é o identificador único de um Pipe no Pipefy. Cada Pipe representa um processo no Pipefy, onde os cartões (cards) fluem através de etapas definidas. Para encontrar o Pipe ID:

1. Acesse o Pipe desejado no Pipefy.
2. Na URL, o Pipe ID é a sequência de números após `/pipes/`.

### O que é o Token de Autenticação?

O Token de Autenticação é uma chave de acesso que permite que você autorize a API do Pipefy a interagir com seus dados de forma segura e controlada. Para gerar um Token de Autenticação:

1. Faça login no Pipefy.
2. Acesse suas Configurações de Usuário.
3. Vá para a seção de Tokens de API.
4. Crie um novo Token e copie-o para uso na integração.

Substitua `seu_pipe_id_aqui` pelo Pipe ID que você encontrou anteriormente e `seu_token_aqui` pelo Token de Autenticação gerado no Pipefy.

## Instalação e Uso

1. Clone este repositório:

   ```
   git clone https://github.com/Tigas29/Pipefy-form-integration.git
   ```

2. Instale as dependências:

   ```
   yarn install
   ```

3. Configure o Pipe ID e o Token no arquivo `.env` conforme explicado acima.

4. Inicie a aplicação:

   ```
   yarn run dev
   ```

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste projeto. Abra uma issue ou envie um pull request!

---

Made with ♥ by Tiago Santos :wave: [Get in touch!](https://www.linkedin.com/in/tiagosantos-dev/)
