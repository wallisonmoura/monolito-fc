import AddClientUseCase from "./add-client.usecase"

const mockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn()
  }
}

describe('add client usecase unit test', () => {

  it('should add client', async () => {
    const repository = mockRepository()
    const usecase = new AddClientUseCase(repository)

    const input = {
      name: 'client 1',
      email: 'client@example.com',
      address: 'client address'
    }

      const result = await usecase.execute(input)
      expect(repository.add).toHaveBeenCalled()
      expect(result.id).toBeDefined()
      expect(result.name).toBe(input.name)
      expect(result.email).toBe(input.email)
      expect(result.address).toBe(input.address)
    })
  })
