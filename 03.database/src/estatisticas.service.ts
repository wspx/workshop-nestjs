import { Injectable, Logger } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";

import { EntityManager } from "typeorm";

import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class EstatisticasService {

  private readonly logger = new Logger(EstatisticasService.name);

  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) { }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async contagemDeClientesAtivos() {
    const usuariosCadastrados = await this.entityManager.query('SELECT COUNT(*) AS total FROM customers');
    this.logger.log(`No momento ${new Date().toISOString()}, existem ${usuariosCadastrados[0].total} cadastrados no banco de dados`);
  }

  @Cron('*/45 * * * * *')
  async contagemDeComprasRealizadasNoBrasilMaiorQue5Dolares() {
    const comprasRealizadas = await this.entityManager.query(`
      SELECT COUNT(*) AS total FROM invoices i 
      WHERE i.BillingCountry = $1 AND i.Total > $2`, 
      ['Brazil', 5]);
    this.logger.log(`No momento ${new Date().toISOString()}, foram realizadas ${comprasRealizadas[0].total} novas compras`);
  }
}
