'use client'

import { Button, TextField } from "@mui/material"
import { useForm, Controller } from "react-hook-form"

export default function Controlled(){
    const {handleSubmit, control} = useForm()
    function onSubmit(data){
        console.log({data})
    }
    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 p-6 rounded-lg space-y-4">
            <Controller
            name="ReactTextField"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField {...field} label="React TextField" variant="outlined" className="bg-white text-black w-full" />
            )}
            />
            <Button type="submit" variant="contained" color="primary" className="w-full">Submit</Button>
        </form>
    </div>
    )
}