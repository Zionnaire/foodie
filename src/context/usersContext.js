import React, {createContext, useState} from "react"

const UsersContext = createContext();

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState(
        [{
            fullName: "Desmond Sever",
            email: "meyan200@gmail.com",
            password: "Desmond200@",
           
        },
        {
            fullName: "Raymond Steve",
            email: "rennan200@gmail.com",
            password: "Raymond200@",
           
        },
        {
            fullName: "Raynod clever",
            email: "reynan200@gmail.com",
            password: "Raynan200@",
           
        },
    ])
    // const [cartLength, setCartLength]= useState(cart.length)
    // console.log(cart)
    // console.log(cartLength)
    return(
        <UsersContext.Provider value={{
            users, setUsers
        }}>
            {children}
        </UsersContext.Provider>
    )
}
export {UsersProvider, UsersContext}

