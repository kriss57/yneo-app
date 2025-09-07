
import ProductCard from "@/components/publicComponents/ProductCard"

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
            <h1>La pages Boutiques</h1>
            <div className="card-container">

                <div id="card" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            imageUrl={p.imageUrl}
                            title={p.title}
                            description={p.description}
                            price={p.price}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}