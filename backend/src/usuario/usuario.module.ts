import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/Usuarios';
import { Servico } from './service/Servico';

@Module({
  controllers: [UsuarioController],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([Usuarios])],
  providers: [Servico],
})
export class UsuarioModule {}
