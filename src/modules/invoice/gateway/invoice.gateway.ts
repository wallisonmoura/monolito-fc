import Invoice from "../domain/invoce.entity";

export default interface InvoiceGateway {
  save(invoice: Invoice): Promise<Invoice>
  find(id: string): Promise<Invoice>
}