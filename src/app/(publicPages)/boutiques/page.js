import ChakraCard from "@/components/chakraComponents/ChakraCard"

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  })
  return res.json()
}

export default async function Boutiques() {
  const products = await getProducts()

  return (
    <section className="section-card-container">
      <h1>La page Boutiques</h1>
      <div className="card-container ">
        {products.map((p) => (
          <ChakraCard
            key={p.id}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        ))}
      </div>
    </section>
  )
}
