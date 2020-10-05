import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  public readonly id?: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @CreateDateColumn({ default: new Date() })
  public created_at?: Date;

  @CreateDateColumn({ default: new Date() })
  public updated_at?: Date;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
      this.created_at = new Date();
    }
  }
}
