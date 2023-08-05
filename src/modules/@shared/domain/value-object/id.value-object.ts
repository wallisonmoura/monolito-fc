import ValueObject from "./value-object.interface";
import {v4 as uuidv4} from "uuid";

//lembrando que value object nao se altera depois da sua criação, entao coloquemos um uuid aqui.
export default class Id implements ValueObject {
    private _id: string

    constructor(id?: string) {
        this._id = id || uuidv4() //vindo id nulo pega o uuid
    }

    get id(): string {
        return this._id
    }
}