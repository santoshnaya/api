async function userList() {
    const data = await fetch("https://dummyjson.com/users")
    const dataToJson = await data.json()
    return dataToJson.users
}

export default async function () {
    const users = await userList()

    return (
        <div className="flex flex-wrap gap-4 mt-[30px] justify-center">
            {
                users.map((item) => {
                    return (
                        <div key={item.id} className="border-[1px] border-blue-500 w-[500px] p-5 flex rounded-lg items-center text-center">
                            <img src={ item.image} alt="" />
                            <div className="ml-9">
                                <div className="font-semibold text-orange-400">Name: {item.firstName} {item.lastName}</div>
                                <div>Age: { item.age}</div>
                                <div>Birth Date: { item.birthDate}</div>
                                <div>{ item.email}</div>
                            </div>
                    </div>
                    )
                    
                })
            }
        </div>
    )
}