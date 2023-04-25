## Name:
GraphQL API Example

## Description:
Example of a GraphQL APIs built on top of VTEX IO.


## Proof points:
- Headless implementation
- VTEX as PaaS
- Fexibility and customization

## How to demo:

1. Clone/Download this repository and open it with a code editor of your choice, eg. VSCode

2. Open the terminal and login to your VTEX account

```
vtex login {{account}}
```

3. Create a new development workspace or use an existing one

```
vtex use {{workspace}}
```

4. Add the account name as the vendor on `manifest.json` file

```
{
  "name": "graphql-api-example",
  "vendor": "{{account}}",
  "version": "0.0.1",
  "title": "GraphQL API Example",
  "description": "Example of a GraphQL APIs built on top of VTEX IO.",
  "mustUpdateAt": "2018-01-04",
  ...
  ...
}
```

5. Link the project

```
vtex link
```

6. After the linking, open Postman or the built-in GraphQL IDE and make queries/mutations

Get a Product by ID:
```
query Product ($id: Int) {
  product(id: $id) {
    id
    name
    linkId
    description
  }
}

Variables:
{
  "id": 4
}
```

Add to Cart:
```
mutation AddToCart ($orderFormId: String, $items: [OrderFormItemInput]) {
  addToCart(orderFormId: $orderFormId, items: $items) {
    orderFormId
    salesChannel
    items {
      id
      productId
      name
      skuName
      price
      refId
    }
  }
}

Variables:
{
  "orderFormId": "1e302e3361b8472aa76634a200015dc0",
  "items": [
      { "id": 1, "quantity": 5, "seller": "1" },
      { "id": 15, "quantity": 2, "seller": "1" }
    ]
}
```