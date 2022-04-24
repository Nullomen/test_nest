import { Module } from '@nestjs/common';
import { PairsModule } from './pairs/pairs.module';
import { TransfersModule } from './transfers/transfers.module';
import { TokensModule } from './tokens/tokens.module';
import { OperationsModule } from './operations/operations.module';

@Module({
  imports: [PairsModule, TransfersModule, TokensModule, OperationsModule],
})
export class ApiModule {}
