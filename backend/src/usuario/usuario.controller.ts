<<<<<<< HEAD
import { Body, Controller, Post } from '@nestjs/common';
=======
import { Body, Controller, Get, Post } from '@nestjs/common';
>>>>>>> usuario-controller

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
<<<<<<< HEAD
=======

  @Get()
  async listarTodos(@Body() body) {
    return await {
      body,
    };
  }
>>>>>>> usuario-controller
}
