import { Conversation } from 'src/conversation/entities/conversation.entity';
import { Message } from 'src/message/entities/message.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Conversation, (conversation) => conversation.users)
  conversations: Conversation[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}
