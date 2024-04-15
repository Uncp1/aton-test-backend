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
  middleName: string;

  @Prop({ type: Date, required: true })
  birthDate: Date;

  @Prop({ type: String, required: true })
  INN: string;

  @Prop({ type: String, required: true })
  responsiblePerson: string;

  @Prop({ type: String, default: 'Не в работе' })
  status: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
