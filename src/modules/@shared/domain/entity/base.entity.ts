import Id from "../value-object/id.value-object"

export default class Entity {
  private _id: Id
  private _createdAt: Date
  private _updatedAt: Date

  constructor (id?: Id) {
    this._id = id
    this._createdAt = new Date()
    this._updatedAt = new Date()
  }

  get id(): Id {
    return this.id
  }

  get createdAt(): Date {
    return this.createdAt
  }

  get updatedAt(): Date {
    return this.updatedAt
  }

  set updatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt
  }
}