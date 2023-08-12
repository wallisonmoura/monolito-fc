import ProcessPaymentUsecase from "../usecase/process-payment/process-payment.usecase";
import { PaymentFacadeInputDTO, PaymentFacadeInterface, PaymentFacadeOutputDTO } from "./payment.facade.interface";

export default class PaymentFacade implements PaymentFacadeInterface {

  constructor(private processPaymentUsecase: ProcessPaymentUsecase) {}
  process(input: PaymentFacadeInputDTO): Promise<PaymentFacadeOutputDTO> {
    return this.processPaymentUsecase.execute(input);
  }
}