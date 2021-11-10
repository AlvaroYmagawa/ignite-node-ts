# Cadastro de carro

**Requisitos Funcionais**
Deve ser possível  cadastrar um novo carro

**Regra de Negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão.
Deve ser possível que apenas o administrador cadastre um carro.

# Listagem de carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponiveis pelo nome do carro

**Regra de Negócio**
Deve ser possível que o usuário visualize os carros disponíveis sem estar logado no sistema.

# Cadastro de especificação no carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as espeficiações
Deve ser possível listar todos os carros

**Regra de Negócio**
Não deve ser possível cadastrar uma especificação para um carro não existente.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.

# Cadastro de imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros


**Requisitos não funcionais**
Utilizar o multer para upload dos arquivos

**Regra de Negócio**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**Requisitos Funcionais**
Deve ser possível listar um aluguel

**Requisitos não funcionais**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possíovel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro