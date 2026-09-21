import { create } from "zustand";

interface CounterState {
    reset:()=>void 
    increase: ()=> void
    count:number
}

export const useCounterStore = create<CounterState>((set)=>({
    count:0,
    increase:()=> set((state) => ({count:state.count + 1})),
    reset:()=>set({count:0})
}))