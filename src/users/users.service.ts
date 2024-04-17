import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findUserByID(id: number): Promise<User> {
    console.log('findUserByID called with id:', id);
    return this.userModel.findById(id).exec();
  }

  async findUser(login: string): Promise<User> {
    return this.userModel.findOne({ login }).exec();
  }
}
