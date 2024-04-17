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
    return await this.clientModel.find().exec();
  }

  async findById(id: string): Promise<Client> {
    return this.clientModel.findById(id).exec();
  }

  async findByUser(responsibleUser: string): Promise<Client[]> {
    return this.clientModel.find({ responsibleUser: responsibleUser }).exec();
  }

  async updateStatus(
    _id: string,
    status: 'Не в работе' | 'В работе' | 'Завершен',
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const id = _id.toString();
    const client = await this.clientModel.findOne({ _id: id });

    if (!client) {
      throw new ClientNotFoundException();
    }
    client.status = status;

    return client.save();
  }
}
