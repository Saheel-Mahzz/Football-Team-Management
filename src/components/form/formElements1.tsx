import Test from "@/test"

interface Base{
    id:string
    name:string
    placeholder:string

}

interface IOptions{
    label:string
    name:string
}
interface SelectElement extends Base{
  options:IOptions[]
  type:'select'
}

interface NumberElement extends Base{
    min:number
    max:number
    type:number
}

interface TextElementProps extends Base{
    type:'text' | 'number' |'password' 
}

type FormElements = SelectElement | NumberElement | TextElementProps
export default function FormElements1(props:FormElements) {

    switch(props.type){
        case 'text':
            return <Test/>
            case 'number':
                return <Test/>
                case 'password':
                    return <Test/>
                    case 'select':
                        return <SelectElement {...props}/>

    }
}

function SelectElement ({id,name,options,placeholder,type}:SelectElement){
    
    return <select/>
}