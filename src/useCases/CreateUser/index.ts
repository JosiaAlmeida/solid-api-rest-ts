//Conecta todas as interfaces e metodos criados

import { MailtrapMailProvider } from "../../providers/implementations/MailtapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserControll } from "./CreateUserUseCase.spec";

const mailtrapMailProvider = new MailtrapMailProvider
const postgresUsersRepository = new PostgresUsersRepository

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserControll = new CreateUserControll(createUserUseCase)

export { createUserUseCase, createUserControll }