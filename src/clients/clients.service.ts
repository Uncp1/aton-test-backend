import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.schema';
import { UpdateClientDto } from './update-client.dto';
import { ClientNotFoundException } from 'src/utils/exceptions';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async createClient(clientData: Partial<Client>): Promise<Client> {
    const createdClient = new this.clientModel(clientData);
    return createdClient.save();
  }

  async findAll(): Promise<Client[]> {
    return await this.clientModel.find();
  }

  async findById(id: number): Promise<Client> {
    return this.clientModel.findById(id);
  }

  async findByUser(responsibleUser: string): Promise<Client[]> {
    return this.clientModel.findById(responsibleUser);
  }

  async updateStatus(
    id: number,
    status: 'Не в работе' | 'В работе' | 'Завершен',
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const updatedClient = await this.clientModel.findByIdAndUpdate(
      id,
      { $set: { status: status, ...updateClientDto } },
      { new: true },
    );

    if (!updatedClient) {
      throw new ClientNotFoundException();
    }

    return updatedClient;
  }
}
