import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGitHub1622067207377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "github",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "repository_id",
            type: "number",
          },
          {
            name: "repository_name",
            type: "varchar",
          },
          {
            name: "repository_description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "repository_html_url",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "repository_language",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tag",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("github");
  }
}
