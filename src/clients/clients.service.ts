// src/client/client.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './client.schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async create(clientData: Partial<Client>): Promise<Client> {
    const createdClient = new this.clientModel(clientData);
    return createdClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    return this.clientModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<Client>): Promise<Client> {
    return this.clientModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Client> {
    return this.clientModel.findByIdAndDelete(id).exec();
  }
}
