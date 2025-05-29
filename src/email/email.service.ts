import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { emailConfig } from '../config/email.config';
import { Abastecimento } from '../abastecimento/abastecimento.model';

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport(emailConfig);
    }

    async enviarRelatorioAbastecimento(abastecimento: Abastecimento) {
        const html = `
            <h1>Relatório de Abastecimento</h1>
            <p><strong>Tipo de Combustível:</strong> ${abastecimento.tipoCombustivel}</p>
            <p><strong>Valor Total:</strong> R$ ${abastecimento.valorEmReais.toFixed(2)}</p>
            <p><strong>Quantidade:</strong> ${abastecimento.quantidadeEmLitros} litros</p>
            <p><strong>Valor por Litro:</strong> R$ ${abastecimento.valorDoLitro.toFixed(2)}</p>
            <p><strong>Bico:</strong> ${abastecimento.bico}</p>
            <p><strong>Frentista:</strong> ${abastecimento.nomeFrentista}</p>
            <p><strong>Data/Hora:</strong> ${abastecimento.dataHora}</p>
        `;

        try {
            const info = await this.transporter.sendMail({
                from: emailConfig.auth.user,
                to: emailConfig.auth.user,
                subject: 'Novo Abastecimento Registrado',
                html
            });
            this.logger.log(`E-mail enviado com sucesso! Message ID: ${info.messageId}`);
            return info;
        } catch (error) {
            this.logger.error('Erro ao enviar e-mail:', error);
            throw new Error('Falha ao enviar e-mail');
        }
    }
} 