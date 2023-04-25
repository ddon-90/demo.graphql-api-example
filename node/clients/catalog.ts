import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class Catalog extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      context,
      {
        ...(options ?? {}),
        headers: {
          ...(options?.headers ?? {}),
          'VtexIdClientAutCookie': context.authToken,
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'X-Vtex-Use-Https': 'true',
        },
      }
    )
  }

  public async getProductById(productId: number): Promise<any> {
    return this.http.get(`api/catalog/pvt/product/${productId}`, {
      metric: 'get-product-by-id',
    })
  }
}
