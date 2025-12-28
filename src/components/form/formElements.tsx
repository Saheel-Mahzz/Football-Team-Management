import SelectInputField from "./form-fields/selectInputField"
import TextInputField from "./form-fields/textInputField"

type Types = 'text' | 'select' | 'password' | 'email'

interface Options {
    label: string,
    value: string
}

interface BaseProps {
    label: string,
    placeholder: string
}

interface TextProps extends BaseProps {
    type: 'text' | 'password' 
}

export interface SelectProps extends BaseProps {
    type: 'select'
    options: Options[]
}

export type FormElementProps = TextProps | SelectProps


export default function FormElements(props: FormElementProps) {
    const { type } = props

    
    const SelectedField = mappingComponent[type]
    return <SelectedField {...props} />
}

const mappingComponent: Record<Types, React.ComponentType<any>> = {
    text: TextInputField,
    select: SelectInputField,
    password: TextInputField,
    email: TextInputField
}
