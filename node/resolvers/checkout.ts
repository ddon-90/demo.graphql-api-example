import { OrderFormItemInput } from './../typings/checkout'

export const addToCart = async (
  _: unknown,
  { orderFormId, items }: { orderFormId: string, items: OrderFormItemInput[] },
  ctx: Context): Promise<any> => {

  const {
    clients: { checkout }
  } = ctx

  const orderForm = await checkout.addToCart(orderFormId, items);
  
  console.log(orderForm)

  return {
    orderFormId: orderForm.orderFormId,
    salesChannel: orderForm.salesChannel,
    items: orderForm.items
  }
}