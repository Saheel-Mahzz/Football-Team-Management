import TextInputField from "@/components/form/form-fields/textInputField"
import FormElements from "@/components/form/formElements"


export const DYNAMIC_FORM_ROUTE ='/dynamic-form'

export default function DynamicForm() {
  return (
    <>
{/* <FormElements label="First name" placeholder="Enter the first name" type="text"/>
<FormElements label="Are you availble?" type="switch" />
<FormElements label="Password" type="password" placeholder="Enter password"/>
<FormElements label="Email" type="email" placeholder="Enter email"/>
<FormElements label="Choose Options" type="select" placeholder="Choose the value.." options={[{
    label:'React',
    value:'react'
},
{
    label:'Nextjs',
    value:'next_js'
}]}/> */}
<FormElements type="text" placeholder="Enter first name" label="Name"   />
<FormElements type=''  />
<TextInputField type=''/>
</>
  )
}
