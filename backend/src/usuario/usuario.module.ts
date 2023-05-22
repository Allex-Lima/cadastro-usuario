import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';

@Module({
  controllers: [UsuarioController],
  exports: [],
  imports: [],
  providers: [],
})
export class UsuarioModule {}
