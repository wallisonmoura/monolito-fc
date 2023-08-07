export default interface StoreCatalogFacadeInterface {
  find(id: any): Promise<any>
  findAll():Promise<any>
}