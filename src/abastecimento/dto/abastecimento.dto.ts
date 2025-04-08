import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive, IsNotEmpty, IsIn } from 'class-validator';

const TIPOS_COMBUSTIVEL = ['Gasolina Comum', 'Gasolina Aditivada', 'Etanol', 'Diesel S10'] as const;

export class CreateAbastecimentoDto {
    @ApiProperty({ enum: TIPOS_COMBUSTIVEL })
    @IsString()
    @IsIn(TIPOS_COMBUSTIVEL)
    tipoCombustivel: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    valorEmReais: number;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    quantidadeEmLitros: number;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    valorDoLitro: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bico: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nomeFrentista: string;
} 