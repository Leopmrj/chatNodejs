import { response } from "express";
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

	private usersRepository: Repository<User>

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	// Como é somente um campo que será escrito não é necessário criar interface
	async create(email: string) {

		// Verificar se o usuário existe
		const userExists = await this.usersRepository.findOne({
			email
		})

		// Se existir retorna o usuário
		if (userExists) {
			return userExists;
		}

		// Senão existir salva no Banco

		// - Cria a entidade com o email recebido
		// - Os outros dados são preenchidos automaticamente.
		const user = this.usersRepository.create({
			email
		})

		// - Grava no banco de dados
		await this.usersRepository.save(user);

		return user;

	}

	// Como é somente um campo que será escrito não é necessário criar interface
	async findByEmail(email: string) {

		// Verificar se o usuário existe
		const userExists = await this.usersRepository.findOne({
			email
		})

		// Se existir retorna o usuário
		if (userExists) {
			return userExists;
		} else {
			return false;
		}

	}

}

export { UsersService };