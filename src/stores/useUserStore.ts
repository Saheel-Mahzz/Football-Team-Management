import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState{
    user:{
        name:string,
        age:number
    },
    updateName:(name:string)=>void
}

// export const useUserStore = create<UserState>((set)=>({
//     user:{
//         name:'saheel',
//         age:25
//     },
//     updateName :(newName)=>set((state)=>({
//         user:{...state.user,name:newName}
//     }))

// }))

export const useUserStore = create<UserState>()(persist((set)=>({
    user:{
        name:'saheel',
        age:25
    },
    updateName:(newName)=>set((state)=>({
        user:{
            ...state.user,
            name:newName
        }
    }))
}),{
    name:'user'
}))