import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.schema';
import { CreateClientDto } from './create-client.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { UserRequest } from 'src/utils/types';
import { UpdateClientDto } from './update-client.dto';

@UseGuards(JwtGuard)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.createClient(createClientDto);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':responsibleUser')
  findByUser(
    @Param('responsibleUser') responsibleUser: string,
  ): Promise<Client[]> {
    return this.clientsService.findByUser(responsibleUser);
  }

  @Patch(':id')
  updateStatus(
    @Req() req: UserRequest,
    @Param('id') id: string,
    @Body('status') status: 'Не в работе' | 'В работе' | 'Завершен',
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.updateStatus(id, status, updateClientDto);
  }
}
