import logo from '../../assets/images/mfs.png';
import Heading from '../../components/Shared/Heading';

const Home = () => {
    return (
        <>
            <div className="">
                <div className='w-1/2 mx-auto'>
                    <img src={logo} alt='logo' />
                </div>
                <Heading title={"Mobile Financial Service (MFS)"} center />
            </div>
        </>
    );
}

export default Home;
