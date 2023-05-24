import { Body, Controller, Post } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {
  @Post()
  async criar(@Body() { email, nome, senha }) {
    return await {
      email,
      nome,
      senha,
    };
  }
}
