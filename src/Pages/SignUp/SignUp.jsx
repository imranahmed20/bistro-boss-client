import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile info update")
                        reset()
                        navigate('/')

                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"{...register('name', { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text"{...register('photoURL', { required: true })} placeholder="Photo" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"{...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password',
                                    {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /^[A-Za-z]+$/i
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password is 6  character</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password is must be less than 20  character</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one upper case and one small case</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                        <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div></>
    );
};

export default SignUp;