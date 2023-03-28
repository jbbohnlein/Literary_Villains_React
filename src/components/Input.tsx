import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface InputType {
  // TODO: Change this to match better with the user's rating
  name: string,
  placeholder: string,
}

// Need a forwardRef to track this input and pass it up to elsewhere (bookform)
const Input = forwardRef((props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}     // refs tell the app to keep track of this information
        fullWidth
        // TODO: change this input type for something better for the rating of 5 stars
        type='text'
        {...props}   // spread operator
    >
    </TextField>
  )
});

export default Input