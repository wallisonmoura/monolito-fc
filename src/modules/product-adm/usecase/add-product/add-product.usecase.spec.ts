import AddProductUseCase from "./add-product.usecase"

const MockRepositoy = () => {
  return {
    add: jest.fn(),
    find: jest.fn()
  }
}

describe("Add product usecase unit test", () => {

  it('should add a product', async () => {
    // repository
    const productRepository = MockRepositoy()
    // usecase
    const usecase = new AddProductUseCase(productRepository)

    const input = {
      name: "product name",
      description: "product description",
      purchasePrice: 100,
      stock: 10
    }

    const result = await usecase.execute(input)

    expect(productRepository.add).toHaveBeenCalled()

    expect(result.id).toBeDefined
    expect(result.name).toBe(input.name)
    expect(result.description).toBe(input.description)
    expect(result.purchasePrice).toBe(input.purchasePrice)
    expect(result.stock).toBe(input.stock)

  })
})