import { DeleteResult, Repository } from 'typeorm'
import { IBaseService } from '../interface/i.base.service';
import { EntityId } from 'typeorm/repository/EntityId'
import { LogService } from '../log/custom.log';

export class BaseService<Model, Repo extends Repository<Model>> implements IBaseService<Model> {
  protected readonly repository: Repo
  protected readonly logger: LogService

  constructor(repository: Repo, logger: LogService) {
    this.repository = repository
    this.logger = logger
  }

  index(): Promise<Model[]> {
    return this.repository.find()
  }

  findById(id: EntityId): Promise<Model> {
    return this.repository.findOne(id)
  }

  findByIds(ids: [EntityId]): Promise<Model[]> {
    return this.repository.findByIds(ids)
  }

  store(data: any): Promise<Model> {
    return this.repository.save(data)
  }

  async update(id: EntityId, data: any): Promise<Model> {
    await this.repository.update(id, data)
    return this.findById(id)
  }

  delete(id: EntityId): Promise<DeleteResult> {
    return this.repository.delete(id)
  }
}