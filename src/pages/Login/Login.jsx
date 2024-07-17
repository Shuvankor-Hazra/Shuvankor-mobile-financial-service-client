import toast from 'react-hot-toast';
import { CgSpinnerTwo } from 'react-icons/cg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  const { signIn, loading, setLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      // 1. Sign In User
      await signIn(email, password);
      navigate(from);
      toast.success('Sign in successful')
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-xl sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Login</h1>
          <p className='text-lg text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Your Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='pin' className='text-sm mb-2'>
                  Pin (5-digit)
                </label>
              </div>
              <input
                type='pin'
                name='pin'
                autoComplete='current-pin'
                id='pin'
                required
                placeholder='*****'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className='bg-blue-500 w-full rounded-md py-3 text-white'>
              {loading ? <CgSpinnerTwo className='animate-spin m-auto text-2xl' /> : 'Continue'}
            </button>
          </div>
        </form>
        <p className='px-6 mt-6 text-lg text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-blue-500 text-gray-600'
          >
            Sign Up.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
