import React from 'react'

const SignUp = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 pt-24 sm:pt-20'>
        {/* Card Container */}
        <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl'> 
            {/* Header */}
            <h2 className='text-3xl font-bold text-center text-gray-600 mb-2'>
                Sign up
            </h2>

            {/* Form */}
            <form className='space-y-5'>
                {/* Full Name */}
                <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                        Full Name
                    </label>
                    <input
                     type="text"
                     placeholder='Enter your full name' 
                     className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none' 
                    />
                </div>

                {/* Email */}
                <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                        Email
                    </label>
                    <input 
                        type="text"
                        placeholder='Enter your email'
                        className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none' 
                    />
                </div>

                {/* Password */}
                <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                        Password
                    </label>
                    <input 
                        type="text"
                        placeholder='Enter your email'
                        className='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none' 
                    />
                </div>

                {/* Sign Up Button */}
                <button
                    type='submit'
                    className='w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300'
                >
                    Sign Up
                </button>
            </form>

            {/* Footer */}
            <p className='text-center text-gray-600 mt-6 text-sm'>
                Already have an account?{" "}
                <a href="#" className='text-indigo-600 hover:underline font-medium'>
                    Login In
                </a>
            </p>

            {/* Divider */}
            {/* <div className='my-6 border-t border-gray-200'></div> */}
            <div className='my-6 relative'>
                <div className='absolute inset-0 flex items-center' aria-hidden>
                    <div className='w-full border-t border-gray-200'></div>
                </div>
                <div className='relative flex justify-center'>
                    <span className='bg-white px-3 text-gray-500 text-sm'>Or</span>
                </div>
            </div>

            {/* Social Signup */}
            <div className='text-center space-y-3'>
                <div className='flex justify-center gap-4'>
                    <button className='border border-gray-800 rounded-md w-full py-2 hover:bg-gray-100 transition cursor-pointer'>
                        <img
                         src="https://www.svgrepo.com/show/475656/google-color.svg" 
                         alt="Google"
                         className='h-5 w-5 inline-block mr-2' 
                        />
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
