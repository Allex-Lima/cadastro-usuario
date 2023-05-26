import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CriarUsuarioDTO {
  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 6,
  })
  senha: string;
}
