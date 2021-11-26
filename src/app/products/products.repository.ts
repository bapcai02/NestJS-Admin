import { HttpException, HttpStatus } from '@nestjs/common';
import { 
  EntityRepository,
  Repository,
  getConnection
} from 'typeorm';
import { Products } from '../../entity/products.entity';
@EntityRepository(Products)
export class ProductRepository extends Repository<Products> {
  async getRoleAll() {
      try {
        const userRole = await getConnection()
            .query('SELECT `rl`.`status`, `rl`.`display_name`,'+
              '`us`.`name`, `us`.`email` FROM `users` `us`' + 
              'INNER JOIN `roles` `rl` ON `us`.`role_id` = `rl`.`id`'
        );

        return userRole;
      } catch (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }
}