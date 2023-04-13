import {MigrationInterface, QueryRunner} from "typeorm";

export class init1626737786922 implements MigrationInterface {
    name = 'init1626737786922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE IF EXISTS active_session')
        await queryRunner.query(`CREATE TABLE active_session (
            id varchar(40)  NOT NULL,
            token text NOT NULL,
            userId text NOT NULL,
            date datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
            primary key (id))`);
        await queryRunner.query('DROP TABLE IF EXISTS user')
        await queryRunner.query(`CREATE TABLE user (
            id varchar(40) NOT NULL, 
            username text NOT NULL,
            email text, 
            password text, 
            user_role varchar(40), 
            date datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
            primary key (id))`);
            await queryRunner.query('DROP TABLE IF EXISTS role')
            await queryRunner.query(`CREATE TABLE role (
                id varchar (40) NOT NULL, 
                name text NOT NULL, 
                date datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                PRIMARY KEY (id))`)
        await queryRunner.query(`INSERT INTO role (id, name) VALUES(1, 'admin')`)
        await queryRunner.query(`INSERT INTO role (id, name) VALUES(2, 'user')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "active_session"`);
    }

}
