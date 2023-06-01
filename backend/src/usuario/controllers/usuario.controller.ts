import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Usuarios } from '../entities/Usuarios';
import { Servico } from '../service/Servico';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly servico: Servico) {}
  @Post()
  async criar(@Res() res, @Body() usuario: Usuarios) {
    const novoUsuario = await this.servico.criarUsuario(usuario);
    return res.status(HttpStatus.CREATED).json({
      messaage: `Usuário com codígo (${novoUsuario.id}) cadastrado com sucesso.`,
    });
  }

  @Get()
  async listarTodos(@Res() res) {
    const listaUsuarios = await this.servico.listarUsuarios();
    const usuarios = [];
    for (const usuario of listaUsuarios) {
      const { id, email, nome, senha } = usuario;
      usuarios.push({
        id,
        email,
        nome,
        senha,
      });
    }
    return res.status(HttpStatus.OK).json(usuarios);
  }

  @Get(':id')
  async listarPorId(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const usuario = await this.servico.buscarUsuario(id);
    const resultado = res.status(HttpStatus.OK).json(usuario);
    return resultado;
  }

  @Put(':id')
  async atualizar(
    @Res() res,
    @Param('id', ParseIntPipe) id: number,
    @Body() usuario: Usuarios,
  ) {
    const usuarioEditado = await this.servico.atualizarUsuario(id, usuario);
    const resultado = res.status(HttpStatus.CREATED).json(usuarioEditado);
    return resultado;
  }

  @Delete(':id')
  async deletarUsuario(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const resultado = await this.servico.removerUsuario(id);

    return res.status(HttpStatus.OK).json(resultado);
  }
}
