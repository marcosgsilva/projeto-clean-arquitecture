import {MailTrapMailProvider} from "../../providers/implementations/MailTrapMailProvider";
import {PostgresUsersRepository} from "../../repositories/implementations/PostgresUsersRepository";
import {CreateUserUseCase} from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()
const createUserCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailTrapMailProvider
)

const createUserController = new CreateUserController(
    createUserCase
)

export {createUserCase, createUserController}