// Resolver


export const product = async (_: unknown, { id }: { id: number }, ctx: Context ) => {

  const { clients: { catalog }} = ctx

  const product = await catalog.getProductById(id);
  
  console.log(product)

  const responseObj = {
    id: product.Id,
    name: product.Name,
    linkId: product.LinkId,
    description: product.Description
  }

  return responseObj
}