import Id from "../../../@shared/domain/value-object/id.value-object"
import Client from "../../domain/client.entity"
import FindClientUseCase from "./find-client.usecase"

const client = new Client({
  id: new Id("1"),
  name: "client",
  email: "client@example.com",
  address: "client address"
})

const mockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(client))
  }
}

describe('find client usecase unit test', () => {
  it('should find client', async () => {
    const repository = mockRepository()
    const usecase = new FindClientUseCase(repository)

    const input = {
      id: "1"
    }

    const result = await usecase.execute(input)
    
    expect(repository.find).toHaveBeenCalled()
    expect(result.id).toEqual(input.id)
    expect(result.name).toBe(client.name)
    expect(result.email).toBe(client.email)
    expect(result.address).toBe(client.address)
    expect(result.createdAt).toBe(client.createdAt)
    expect(result.updatedAt).toBe(client.updatedAt)
  })
})