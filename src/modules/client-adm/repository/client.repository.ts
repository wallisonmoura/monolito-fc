import Id from "../../@shared/domain/value-object/id.value-object";
import Client from "../domain/client.entity";
import ClientGateway from "../gateway/client.gateway";
import { ClientModel } from "./client.model";

export default class ClientRepository implements ClientGateway {
  add(client: Client): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async find(id: string): Promise<Client> {
    const client = await ClientModel.findOne({
      where: { id },
    })

    if(!client) {
      throw new Error("Client not found")
    }

    return new Client({
      id: new Id(client.get("id")),
      name: client.get("name"),
      email: client.get("email"),
      address: client.get("address"),
      createdAt: client.get("createdAt"),
      updatedAt: client.get("updatedAt"),
    })
  }
}