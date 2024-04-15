import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Client {
  @Prop({ type: String, required: true })
  id: string;

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
  status: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
