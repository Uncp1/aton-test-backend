import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(clientData: Partial<User>): Promise<User> {
    const createdClient = new this.userModel(clientData);
    return createdClient.save();
  }

  async findUser(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
}
