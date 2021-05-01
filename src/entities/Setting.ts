import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";

@Entity("settings")
class Setting {

	@PrimaryColumn()
	id: string;

	@Column()
	username: string;

	@Column()
	chat: boolean;

	@UpdateDateColumn()
	updated_at: Date;

	@CreateDateColumn()
	created_at: Date;

	// Se n�o vier (insert) ele � preenchido como o pr�ximo id
	// Se vier (update) n�o faz nada.
	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}

}

export { Setting };