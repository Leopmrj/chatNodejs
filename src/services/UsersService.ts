import { response } from "express";
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

	private usersRepository: Repository<User>

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	// Como � somente um campo que ser� escrito n�o � necess�rio criar interface
	async create(email: string) {

		// Verificar se o usu�rio existe
		const userExists = await this.usersRepository.findOne({
			email
		})

		// Se existir retorna o usu�rio
		if (userExists) {
			return userExists;
		}

		// Sen�o existir salva no Banco

		// - Cria a entidade com o email recebido
		// - Os outros dados s�o preenchidos automaticamente.
		const user = this.usersRepository.create({
			email
		})

		// - Grava no banco de dados
		await this.usersRepository.save(user);

		return user;

	}

	// Como � somente um campo que ser� escrito n�o � necess�rio criar interface
	async findByEmail(email: string) {

		// Verificar se o usu�rio existe
		const userExists = await this.usersRepository.findOne({
			email
		})

		// Se existir retorna o usu�rio
		if (userExists) {
			return userExists;
		} else {
			return false;
		}

	}

}

export { UsersService };