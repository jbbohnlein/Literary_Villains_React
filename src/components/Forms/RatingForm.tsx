import Input from "../Input"
import Button from "../Button"
import { server_calls } from "../../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAuthor, chooseKey, chooseTitle, chooseYear } from "../../redux/slices/RootSlice"

import { useForm } from 'react-hook-form'

interface RatingFormProps {
    // TODO: revisit this. What do I need and not need in here??
    id?: string,
    key?: string,
    title?: string,
    // data?: {}
}

const RatingForm = (props: RatingFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();
    
    const onSubmit = (data: any, event: any) => {
        console.log(`KEY: ${typeof props.key}`);
        console.log(props.key)
        console.log(data)
        if (props.key && props.key.length > 0) {
          server_calls.update(props.key[0], data)
          console.log(`Updated: ${ data.author } ${ props.title }`);
          setTimeout(() => {window.location.reload()}, 500);
          event.target.reset();
        } else {
            dispatch(chooseKey(data.key))
            dispatch(chooseAuthor(data.author))
            dispatch(chooseTitle(data.title))
            dispatch(chooseYear(data.first_publish_year))


            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 500);
          }
          
        }            

    return (

    // TODO - handle Function
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="rating">Enter Your Rating</label>
                <Input {...register('user_rating')} name="user_rating" placeholder="Your Rating"/>
            </div>
            <div className="flex p-1">
                <Button
                    className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                    >
                    Submit
                </Button>
            </div>            
        </form>
    </div>
  )
}

export default RatingForm