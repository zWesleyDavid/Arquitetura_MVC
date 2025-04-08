import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './log.schema';

@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) private readonly logModel: Model<Log>) {}

  async createLog(level: string, message: string, context?: string): Promise<void> {
    const log = new this.logModel({ level, message, context });
    await log.save();
  }
}