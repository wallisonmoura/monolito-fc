export interface AddClientFacadeInputDTO {
  id?: string
  name: string
  email: string
  address: string
}

export interface FindClientFacadeInputDTO {
  id: string
}

export interface FindClientOutputDTO {
  id: string
  name: string
  email: string
  address: string
  createdAt: Date
  updatedAt: Date
}

export default interface ClientAdmFacadeInterface {
  add(input: AddClientFacadeInputDTO): Promise<void>
  find(input: FindClientFacadeInputDTO): Promise<FindClientOutputDTO>
}