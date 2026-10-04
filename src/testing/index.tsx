import { useCounterStore } from "@/stores/useCounterStore"
import { useUserStore } from "@/stores/useUserStore"

export const TESTING_ROUTE ='/testing'
export default function Testing() {
    const count = useCounterStore((state)=> state.count)
    const increase = useCounterStore((state)=> state.increase)
    const reset = useCounterStore((state)=>state.reset)
    const {updateName,user} = useUserStore()

    const numbers = [1,2,4,4,5,6,1]

    // const unique =[]
    // numbers.map((num,index)=> numbers.indexOf())
    const unique = numbers.filter((num,index) =>numbers.indexOf(num) === index )
    
  return (
    <div style={{ padding: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
  <h2>{user.name}</h2>
  <button onClick={()=>updateName('sanjeeta')}>Change name</button>
    </div>
  )
}
