export default function ProductCard({ imageUrl, title, description, price }) {
    return (
        <div className="bg-gray-900 text-white rounded-2xl shadow-md p-4 max-w-sm">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-3">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-300">{description}</p>
                <p className="text-green-400 font-semibold mt-2">{price} €</p>
            </div>
        </div>
    )
}
