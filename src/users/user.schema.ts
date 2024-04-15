import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, unique: true, required: true })
  id: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  login: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
