import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const USER_SCHEMA = z.object({
    username:z.string().min(3,'Username should be atleast 3 characters long!')
})

type UserFormData = z.infer<typeof USER_SCHEMA>
export const HOOK_ROUTE = '/hook-testing'
export default function HookTesting() {
    const {register,handleSubmit,formState:{errors}} = useForm<UserFormData>({
        resolver:zodResolver(USER_SCHEMA),
        defaultValues:{
            username:'saheel'
        }
    })

    const onFormSubmit = (data)=>{
   console.log('Form data',data)
    }
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Input {...register('username')}
   placeholder="Enter name"/>
      {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  )

  
}

