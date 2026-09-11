import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"


export const TEST_ROUTE ='/test'


export default function Test() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 500)
  const [count,setCount] = useState<number>(0)

  useEffect(() => {
    if (debouncedQuery === "") return
    console.log("Searching for:", debouncedQuery)
  }, [debouncedQuery])

  const word= "      hello world                dev"
  console.log('timmed word',word.trim())

  const wordArray = word.split(' ')
  const newArray =[]

  for(let i = wordArray.length -1 ; i>= 0; i--){
   newArray.push(wordArray[i])
  }
console.log('new word',newArray.join(' '))

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {query !== debouncedQuery && <p>Searching...</p>}
      <Button onClick={()=>setCount((prev) => prev + 1)}>add</Button>
    </div>
  )
}



function useDebounce (value:string,delay:number){

  const [debounceValue,setDebounceValue] =useState<string>('')
    
  useEffect(()=>{
let timer = setTimeout(()=>{
   setDebounceValue(value)
},delay)
    return ()=>{
      clearTimeout(timer)
    }
  },[delay,value])
  return debounceValue
}
function useDefault(value){
return value ?? 'default'
}