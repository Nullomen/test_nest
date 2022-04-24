import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 50 })
  public name: string;

  @Column({ type: 'varchar', length: 42 })
  public address: string;

  @Column({ type: 'varchar', length: 20 })
  public dex: string;

  @Column({ type: 'varchar', length: 42 })
  public token0: string;

  @Column({ type: 'varchar', length: 42 })
  public token1: string;

  @Column({ type: 'double precision', default: 0 })
  public price_token1: number;

  @Column({ type: 'double precision', default: 0 })
  public price_usd: number;

  @Column({ type: 'boolean', default: false })
  public is_reversed: boolean;

  @Column({ type: 'double precision', default: 0 })
  public liquidity_usd: number;

  @Column({ type: 'varchar' })
  public network: string;

  @CreateDateColumn({ type: 'timestamp' })
  public first_activity_at!: Date;
}
