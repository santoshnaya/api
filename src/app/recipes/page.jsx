async function recipeList() {
    const data = await fetch("https://dummyjson.com/recipes")
    const dataToJson = await data.json()
    return dataToJson.recipes
}

export default async function () {
    const recipes = await recipeList()

    return (
        <div className="flex flex-wrap gap-4 mt-[30px] justify-center">
            {
                recipes.map((item) => {
                    return (
                        <div key={item.id} className="border-[1px] border-blue-500 w-[300px] p-5 flex flex-col rounded-lg items-center text-center">
                            <img className="rounded-full" src={item.image} alt="" />
                            <div className="font-bold my-3 text-2xl text-blue-600">{item.name}</div>
                            <div>Ingredients: {item.ingredients}</div>
                            <div className="text-orange-400">Tags: { item.tags}</div>
                            <div className="font-semibold">Type: { item.cuisine}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}