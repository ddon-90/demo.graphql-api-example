import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

import { OrderFormItemInput, OrderFormUpdateItemInput } from './../typings/checkout'

export class Checkout extends JanusClient {
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

  public async addToCart(orderFormId: string, items: OrderFormItemInput[]): Promise<any> {
    return this.http.post(`api/checkout/pub/orderForm/${orderFormId}/items`, {
      orderItems: items
    }, {
      metric: 'add-to-cart',
    })
  }

  public async updateCartItems(orderFormId: string, items: OrderFormUpdateItemInput[]): Promise<any> {
    return this.http.post(`api/checkout/pub/orderForm/${orderFormId}/items/update`, {
      orderItems: items
    }, {
      metric: 'update-cart-items',
    })
  }
}
