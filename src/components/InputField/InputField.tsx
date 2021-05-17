import React from 'react'
import {TextField, TextFieldProps} from '@material-ui/core'
import { FieldProps} from "formik";

const InputField: React.FC<FieldProps & TextFieldProps > = ({label, placeholder, field}) => {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            label={label}
            placeholder={placeholder}
            {...field}
        />
    )
}

export default InputField