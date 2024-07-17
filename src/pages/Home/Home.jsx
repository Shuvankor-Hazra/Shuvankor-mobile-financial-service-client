import logo from '../../assets/images/mfs.png';

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold">Mobile Financial Service (MFS)</h1>
                <div className='w-1/2 mx-auto'>
                    <img src={logo} alt='logo' />
                </div>
            </div>
        </>
    );
}

export default Home;
