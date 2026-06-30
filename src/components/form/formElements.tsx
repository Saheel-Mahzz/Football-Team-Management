


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

