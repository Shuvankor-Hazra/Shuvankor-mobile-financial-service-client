import Heading from "../../Shared/Heading";


const UserCashOutRequest = () => {
    return (
        <>
            <Heading title={"User Cash-Out Request"} center />
            <div className="max-w-md mx-auto mt-52">
                <form
                    // onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='phone' className='block mb-2 text-sm'>
                                Agent Phone Number
                            </label>
                            <input
                                type='tel'
                                name='phone'
                                id='phone'
                                required
                                placeholder='Agent Phone Number'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='amount' className='text-sm mb-2'>
                                    Amount
                                </label>
                            </div>
                            <input
                                type='number'
                                name='amount'
                                autoComplete='current-amount'
                                id='amount'
                                required
                                placeholder='Amount'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-blue-500 w-full rounded-md py-3 text-white'>
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UserCashOutRequest;
