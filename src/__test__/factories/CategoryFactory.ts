import { Category, Constructor } from '../../category/Category'

import { UserFactory } from './UserFactory'

export class CategoryFactory {
  public static create(category: Partial<Constructor> = {}): Category {
    return new Category({
      name: category.name ?? 'Category test',
      icon: category.icon ?? 'Icon test',
      user: category.user ?? UserFactory.create(),
    })
  }
}
