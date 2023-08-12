import GenerateInvoiceUseCase from "./generate-invoice.usecase"

const mockRepository = () => {
  return {
    save: jest.fn(),
    find: jest.fn()
  }
}

describe('Generate Invoice usecase unit test', () => {
  it('should generate a invoice', async () => {
    const invoiceRepository = mockRepository()
    const usecase = new GenerateInvoiceUseCase(invoiceRepository)

    const input = {
      name: 'Invoice 1',
      document: '12345678901',
      street: 'Rua 1',
      number: '1',
      complement: 'Complemento 1',
      city: 'Cidade 1',
      state: 'Estado 1',
      zipCode: '00000-000',
      items: [
        {
          id: '1',
          name: 'Item 1',
          price: 100
        }
      ]
    }

    const result = await usecase.execute(input)
    expect(invoiceRepository.save).toHaveBeenCalled()
    expect(result.id).toBeDefined()
    expect(result.name).toBe(input.name)
    expect(result.document).toBe(input.document)
    expect(result.street).toBe(input.street)
    expect(result.number).toBe(input.number)
    expect(result.complement).toBe(input.complement)
    expect(result.city).toBe(input.city)
    expect(result.state).toBe(input.state)
    expect(result.zipCode).toBe(input.zipCode)
    expect(result.items[0].id).toBe(input.items[0].id)
    expect(result.items[0].name).toBe(input.items[0].name)
    expect(result.items[0].price).toBe(input.items[0].price)
    expect(result.total).toBe(input.items.reduce((prev, curr) => curr.price + prev, 0))
  })
})