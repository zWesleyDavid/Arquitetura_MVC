import { Controller, Get, Post, Body, Param, HttpException, HttpStatus, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Abastecimento } from './abastecimento.model';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateAbastecimentoDto } from './dto/abastecimento.dto';
import { EmailService } from '../email/email.service';

@ApiTags('abastecimentos')
@Controller('abastecimentos')
@UsePipes(new ValidationPipe({ transform: true }))
export class AbastecimentoController {
    private readonly logger = new Logger(AbastecimentoController.name);

    constructor(
        @InjectModel('Abastecimento') private readonly abastecimentoModel: Model<Abastecimento>,
        private readonly emailService: EmailService
    ) { }

    @Post()
    @ApiOperation({ summary: 'Registrar um novo abastecimento' })
    @ApiResponse({ status: 201, description: 'Abastecimento registrado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    @ApiBody({ type: CreateAbastecimentoDto })
    async registrarAbastecimento(@Body() dadosAbastecimento: CreateAbastecimentoDto) {
        try {
            const novoAbastecimento = await this.abastecimentoModel['realizarAbastecimento'](dadosAbastecimento);
            await this.emailService.enviarRelatorioAbastecimento(novoAbastecimento);
            
            return { 
                mensagem: 'Abastecimento realizado com sucesso!', 
                registro: novoAbastecimento 
            };
        } catch (error) {
            this.logger.error('Erro ao processar abastecimento:', error);
            throw new HttpException('Erro ao processar o abastecimento', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os abastecimentos' })
    @ApiResponse({ status: 200, description: 'Lista de abastecimentos retornada com sucesso' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async listarAbastecimentos() {
        this.logger.log('Listando todos os abastecimentos...');
        try {
            const abastecimentos = await this.abastecimentoModel.find().exec();
            this.logger.log(`Encontrados ${abastecimentos.length} abastecimentos`);
            return abastecimentos;
        } catch (error) {
            this.logger.error('Erro ao listar abastecimentos:', error);
            throw new HttpException('Erro ao listar abastecimentos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obter um abastecimento pelo ID' })
    @ApiResponse({ status: 200, description: 'Abastecimento encontrado' })
    @ApiResponse({ status: 404, description: 'Abastecimento não encontrado' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
    async obterAbastecimento(@Param('id') id: string) {
        this.logger.log(`Buscando abastecimento com ID: ${id}`);
        try {
            const abastecimento = await this.abastecimentoModel.findById(id).exec();
            if (!abastecimento) {
                this.logger.warn(`Abastecimento com ID ${id} não encontrado`);
                throw new HttpException('Abastecimento não encontrado', HttpStatus.NOT_FOUND);
            }
            this.logger.log('Abastecimento encontrado com sucesso');
            return abastecimento;
        } catch (error) {
            if (error instanceof HttpException) throw error;
            this.logger.error('Erro ao obter abastecimento:', error);
            throw new HttpException('Erro ao obter abastecimento', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
