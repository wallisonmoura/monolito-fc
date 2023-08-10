import UseCaseInterface from "../../../@shared/usecases/use-case.interface";
import Transaction from "../../domain/transaction";
import PaymentGateway from "../../gateway/payment.gateway";
import { ProcessPaymentInputDTO, ProcessPaymentOutputDTO } from "./process-payment.dto";

export default class ProcessPaymentUsecase implements UseCaseInterface {

  constructor(private transactionRepository: PaymentGateway) {}
  async execute(input: ProcessPaymentInputDTO): Promise<ProcessPaymentOutputDTO> {
    const transaction = new Transaction({
      amount: input.amount,
      orderId: input.orderId,
    })

    transaction.process()

    const persistTransaction = await this.transactionRepository.save(transaction)

    return {
      transactionId: persistTransaction.id.id,
      orderId: persistTransaction.orderId,
      amount: persistTransaction.amount,
      status: persistTransaction.status,
      createdAt: persistTransaction.createdAt,
      updatedAt: persistTransaction.updatedAt
    }
  }
}