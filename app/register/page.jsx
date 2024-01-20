'use client'

import { useForm } from "react-hook-form"

export default function Register(){
    const {register, handleSubmit} = useForm();

    function onSubmit(data){
        console.log({data})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-4 rounded-lg">
        <input 
            {...register("firstName")} 
            className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 mb-4 w-full"
        />
        <select 
            {...register("gender")} 
            className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 mb-4 w-full"
        >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
        </select>
        <input 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        />
    </form>
    )
}