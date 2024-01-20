'use client'

import {useForm} from 'react-hook-form'

// Supported validation list:
// required, min, max, minLength, maxLength, pattern, validate

export default function Validation(){
    const {register, handleSubmit, formState: {errors}} = useForm()
    function onSubmit(data){
        console.log({data})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-4 rounded-lg space-y-4">
        <div>
            <input 
                {...register("firstName", { 
                    required: "First name is required", 
                    maxLength: { value: 20, message: "First name cannot exceed 20 characters" }
                })}
                className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 w-full"
                placeholder="First Name"
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
        </div>

        <div>
            <input 
                {...register("lastName", { 
                    pattern: { value: /^[A-Za-z]+$/i, message: "Last name must contain only letters" }
                })}
                className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 w-full"
                placeholder="Last Name"
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
        </div>

        <div>
            <input 
                type="number" 
                {...register("age", { 
                    min: { value: 18, message: "You must be at least 18 years old" }, 
                    max: { value: 99, message: "Age must be less than 100" }
                })}
                className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 w-full"
                placeholder="Age"
            />
            {errors.age && <span className="text-red-500">{errors.age.message}</span>}
        </div>

        <input 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
        />
    </form>
    )
}