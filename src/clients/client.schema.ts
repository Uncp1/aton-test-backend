import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Client extends Document {
  @Prop({ type: String, required: true })
  accountNumber: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  surname: string;

  @Prop({ type: Date, required: true })
  // birthDate: Date;
  birthDate: string;

  @Prop({ type: String, required: true })
  inn: string;

  @Prop({ type: String, required: true })
  responsibleUser: string;

  @Prop({ type: String, default: 'Не в работе' })
  status: 'Не в работе' | 'В работе' | 'Завершен';
}

export const ClientSchema = SchemaFactory.createForClass(Client);
