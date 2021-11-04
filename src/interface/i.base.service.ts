import { EntityId } from 'typeorm/repository/EntityId'
import { DeleteResult } from 'typeorm'

export interface IBaseService<Model> {
  index(): Promise<Model[]>

  findById(id: EntityId): Promise<Model>

  findByIds(id: [EntityId]): Promise<Model[]>

  store(data: any): Promise<Model>

  update(id: EntityId, data: any): Promise<Model>

  delete(id: EntityId): Promise<DeleteResult>
}