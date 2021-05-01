import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

// Aqui no Entity tem de ser o nome exato da tabela, geralmente em minúsculo.
// Porém a classe fica no singular, no caso User.
@Entity("users")
class User {

	@PrimaryColumn()
	id: string;

	@Column()
	email: string;

	@CreateDateColumn()
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}

}

export { User };