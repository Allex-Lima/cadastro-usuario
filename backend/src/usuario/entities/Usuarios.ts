import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsEmail()
  @Column()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  nome: string;

  @IsStrongPassword({
    minLength: 6,
  })
  @Column()
  senha: string;
}
