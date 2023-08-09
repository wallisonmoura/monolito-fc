import UseCaseInterface from "../../@shared/usecases/use-case.interface";
import ClientAdmFacadeInterface, { AddClientFacadeInputDTO, FindClientFacadeInputDTO, FindClientOutputDTO } from "./client-adm.facade.interface";

export type UseCaseProps = {
  addUseCase: UseCaseInterface
  findUseCase: UseCaseInterface
}

export default class ClientAdmFacade implements ClientAdmFacadeInterface {

  private _findUsecase: UseCaseInterface
  private _addUsecase: UseCaseInterface

  constructor(props: UseCaseProps) {
    this._findUsecase = props.findUseCase
    this._addUsecase = props.addUseCase
  }

  async add(input: AddClientFacadeInputDTO): Promise<void> {
    await this._addUsecase.execute(input)
  }
  async find(input: FindClientFacadeInputDTO): Promise<FindClientOutputDTO> {
    return await this._findUsecase.execute(input)
  }

}