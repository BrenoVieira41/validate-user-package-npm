<p align="center">
    <h1 align="center"> Criação de pacote NPM</h1>
    <h3 align="center"> O pacote npm é um código feito anteriormente com a possibilidade de ser baixado e utilizado por qualquer usuário</h2>
</p>

## Como baixar
```
npm i user-validations-for-npm
```

### Funções existentes

#### Validar Textos
- Valida se é uma string com mais de 2 caracteres
- (esperado 1 string)

#### Validar Números
- Valida se é um número
- (esperado uma string com números)

#### Validar Telefone
- Valida se existe somente números
- Se possui 11 dígitos
- (esperado uma string com 11 números)

#### Validar Telefone em formato Brasileiro
- Valida várias formas de formatação de números brasileiros
- (esperado uma string formatada como EX:(12) 91212-1221)

#### Validar se o valor está entre...
- Valida se o número informado está entre 2 números diferentes.
- (esperado valor, valor menor, valor maior)

#### Validar se é maior de idade
- Valida se o usuário é maior de idade
- (esperado idade em (yyyy/mm/dd))
- Se quiser pode passar uma nova idade para ser o novo de maior exemplo (21)

#### Validar CPF
- Valida se é um cpf com ou sem formatação
- (espera uma string de 11 dígitos ou 14 dígitos com pontos e traço)

#### Validar CNPJ
- Valida se o CNPJ possui o número de caracteres corretos e se está formatado como CNPJ
- (espera uma string com um cnpj formatado)

#### Validar e-mail
- Valida se o e-mail é válido
- (espera uma string com um e-mail)

#### Validar Password
- Valida se a senha possui no mínimo 8 caracteres com 1 maiúsculo, um número, e um símbolo
- (espera uma string com alguns caracteres especiais)
