async function productList() {
    const data = await fetch("https://dummyjson.com/products")
    const dataToJson = await data.json()
    return dataToJson.products
}

export default async function () {
    const products = await productList()
    return (
        <div className="flex flex-wrap gap-1 rounded-lg mt-10 justify-center">
            {
                products.map((item) => {
                    return (
                        <div key={item.id} className="border-[1px] border-blue-500 w-[300px] p-5 flex flex-col rounded-lg items-center text-center">
                            <img src={ item.images} alt="" />
                            <div className="font-semibold text-orange-400">Name: {item.title}</div>
                            <div>Price: {item.price}</div>
                            <div>Category: {item.category}</div>
                            <div>Rating: {item.rating}</div>    
                            <div>Stock: {item.stock}</div>
                            <div>Brand: {item.brand}</div>
                            {/* <div>Color: {item.color}</div> */}
                            <div>DiscountPercentage: {item.discountPercentage}</div>
                            {/* <div>Thumbnail: {item.thumbnail}</div> */}
                            {/* <div>Description: {item.description}</div> */}
                            {/* <div>Images: {item.images}</div> */}
                            <div>Category: {item.category}</div>
                            <button className="px-6 py-2 bg-blue-400 mt-1 rounded-md text-white font-semibold">Buy Now</button>
                        </div>
                    )
                })
            }
        </div>
    )
}