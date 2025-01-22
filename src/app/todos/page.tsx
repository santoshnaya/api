async function todoList() {
    const data = await fetch("https://dummyjson.com/todos")
    const dataToJson = await data.json()
    return dataToJson.todos
}

export default async function () {
    const todos = await todoList()
    return (
        <div className="flex flex-wrap gap-1 rounded-lg mt-10 justify-center">
            {
                todos.map((item) => {
                    return (
                        <div key={item.id} className="border-[1px] border-blue-500 w-[400px] p-5 flex flex-col rounded-lg items-center text-center">
                            <div className="text-blue-500 font-semibold">Todos List: {item.todo}</div>
                            <div className="mb-9">Complete or not: {item.completed}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}