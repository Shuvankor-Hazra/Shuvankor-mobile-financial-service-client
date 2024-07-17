import Heading from "../../Shared/Heading";
import logo from '../../../assets/images/mfs.png';


const UserDashboard = () => {
    return (
        <>
            <Heading title={'User Dashboard'} subtitle={'Mobile Financial Service (MFS)'} center />
            <div className='w-1/2 mx-auto'>
                <img src={logo} alt="logo" />
            </div>
        </>
    );
}

export default UserDashboard;
