import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";

const AllItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors)
    return (
        <div className='w-full p-10'>
            <SectionTitle subHeading="What' new" heading="Add an Item"></SectionTitle>
            <form onSubmit={onSubmit}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} class="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Pick a file</span>
                    </label>
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-secondary mt-4' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AllItem;