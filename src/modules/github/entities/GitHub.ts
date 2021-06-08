import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("github")
class GitHub {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  repository_id: number;

  @Column()
  repository_name: string;

  @Column({ nullable: true })
  repository_description: string;

  @Column({ nullable: true })
  repository_html_url: string;

  @Column({ nullable: true })
  repository_language: string;

  @Column({ nullable: true })
  tag: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { GitHub };
