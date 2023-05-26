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
import { AtualizarUsuarioDTO } from './dto/atualizar-usuario.dto';

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
  async atualizar(
    @Body() { email, nome, senha }: AtualizarUsuarioDTO,
    @Param() params,
  ) {
    return await {
      params,
      email,
      nome,
      senha,
    };
  }

  @Delete(':id')
  async deletarUsuario(@Param() params) {
    return await { params };
  }
}
