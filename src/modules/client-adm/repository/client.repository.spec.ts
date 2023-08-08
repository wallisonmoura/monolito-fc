import { Sequelize } from "sequelize-typescript"
import { ClientModel } from "./client.model"
import ClientRepository from "./client.repository"
import Client from "../domain/client.entity"
import Id from "../../@shared/domain/value-object/id.value-object"

describe('clientRepository test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })
    await sequelize.addModels([ClientModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a client', async () => {
    const client = new Client({
      id: new Id('1'),
      name: 'Client 1',
      email: 'client@example.com',
      address: 'address',
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    const clientRepository = new ClientRepository()
    await clientRepository.add(client)

    const clientDB = await ClientModel.findOne({
      where: { id: '1' }
    })

    expect(clientDB).toBeDefined()
    expect(clientDB.get("id")).toBe(client.id.id)
    expect(clientDB.get("name")).toBe(client.name)
    expect(clientDB.get("email")).toBe(client.email)
    expect(clientDB.get("address")).toBe(client.address)
    expect(clientDB.get("createdAt")).toStrictEqual(client.createdAt)
    expect(clientDB.get("updatedAt")).toStrictEqual(client.updatedAt)
  })

  it('should a find a client', async () => {
    const client = await ClientModel.create({
      id: '1',
      name: 'Client 1',
      email: 'client@example.com',
      address: 'address',
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    const clientRepository = new ClientRepository()
    const result = await clientRepository.find(client.get('id'))

    expect(result.id.id).toEqual(client.get("id"))
    expect(result.name).toEqual(client.get("name"))
    expect(result.email).toEqual(client.get("email"))
    expect(result.address).toEqual(client.get("address"))
    expect(result.createdAt).toEqual(client.get("createdAt"))
    expect(result.updatedAt).toEqual(client.get("updatedAt"))
  })
})