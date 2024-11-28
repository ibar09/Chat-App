import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Message } from 'src/message/entities/message.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToMany(() => User, (user) => user.conversations)
  users: User[];

  @OneToMany(() => Message, (message) => message.conversation)
  messages: Message[];
}
