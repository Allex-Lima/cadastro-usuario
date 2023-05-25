import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {
  @Post()
  async criar(@Body() { id, email, nome, senha }) {
    return await {
      id,
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
}
