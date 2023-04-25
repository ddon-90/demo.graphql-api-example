import { IOClients } from '@vtex/api'
import { Catalog } from './catalog'
import { Checkout } from './checkout'

export class Clients extends IOClients {
  get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
  get checkout() {
    return this.getOrSet('checkout', Checkout)
  }
}
