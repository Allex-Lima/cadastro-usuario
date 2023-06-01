import { Injectable } from '@nestjs/common';
import { Usuarios } from '../entities/Usuarios';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Servico {
  constructor(
    @InjectRepository(Usuarios)
    private usuarioRepository: Repository<Usuarios>,
  ) {}

  async criarUsuario(usuario: Usuarios): Promise<Usuarios> {
    return this.usuarioRepository.save(usuario);
  }

  async listarUsuarios(): Promise<Usuarios[]> {
    return this.usuarioRepository.find();
  }

  async buscarUsuario(id: number): Promise<Usuarios | null> {
    const retorno = await this.usuarioRepository.findOneBy({ id });
    return retorno;
  }

  async atualizarUsuario(idUsuario: number, usuario: Usuarios) {
    return await this.usuarioRepository.update(idUsuario, usuario);
  }

  async removerUsuario(id: number) {
    const retorno = await this.usuarioRepository.findOneBy({ id });
    if (retorno === null) {
      return `Codígo de Usuário (${id}) não encontrado.`;
    }
    await this.usuarioRepository.delete(id);
    return `Usuário (${id}) deletado com sucesso.`;
  }
}
