import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CriarUsuarioDTO } from './dto/criar-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  @Post()
  async criar(@Body() { email, nome, senha }: CriarUsuarioDTO) {
    return await {
      email,
      nome,
      senha,
    };
  }

  @Get()
  async listarTodos() {
    return await { usuarios: [] };
  }

  @Get(':id')
  async listarPorId(@Param() params) {
    return await {
      usuarios: {},
      params,
    };
  }

  @Put(':id')
  async atualizar(@Body() body, @Param() params) {
    return await {
      params,
      body,
    };
  }

  @Delete(':id')
  async deletarUsuario(@Param() params) {
    return await { params };
  }
}
