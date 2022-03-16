# Regras de negócio:

 

Back end: 

[ x ] Cadastro de pessoas com os seguintes dados: Nome, CPF e data de nascimento;
[ x ] Não pode inserir uma pessoa sem CPF;
[ x ] deve-se fazer um calculo para validar se o CPF é válido;
[ x ] não pode inserir dois CPFs iguais;
[ x ] Caso já tenha algum CPF igual na base de dados, deve devolver uma mensagem pro front informando que já existe este CPF no banco.
[ x ] Quando o CPF for inválido, devolver a mensagem pro front dizendo o mesmo.

Tecnologias a serem utilizadas:
- Express;
- Mongo;
- Git;
- Docker.

Como utilizar o GIT:

Você deve criar 4 branchs.

- Master (onde terá todo o projeto desenvolvido);
- Dev (para fazer os testes entre back e front)
- Front ( onde terá somente a parte do front);
- Back ( onde terá somente a parte do Back);

Fluxo:
Faça primeiro o back, na sequencia o front e por fim junte as duas branchs na DEV para que tudo possa funcionar em conjunto. Assim que tudo estiver funcionando, fazer um merge entre DEV e MASTER;



