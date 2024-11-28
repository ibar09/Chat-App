import { Conversation } from 'src/conversation/entities/conversation.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.messages)
  user: User;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  conversation: Conversation;

  @Column()
  createdAt: Date;
}
