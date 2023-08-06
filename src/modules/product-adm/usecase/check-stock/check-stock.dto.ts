export interface CheckStockInputDTO {
  productId: string
}

export interface CheckStockOutputDTO {
  productId: string //Opcional
  stock: number
}