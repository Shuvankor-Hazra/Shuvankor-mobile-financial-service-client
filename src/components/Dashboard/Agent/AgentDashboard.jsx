import Heading from "../../Shared/Heading";
import logo from '../../../assets/images/mfs.png';


const AgentDashboard = () => {
    return (
        <>
            <Heading title={'Agent Dashboard'} subtitle={'Mobile Financial Service (MFS)'} center />
            <div className='w-1/4 mx-auto'>
                <img src={logo} alt="logo" />
            </div>
        </>
    );
}

export default AgentDashboard;
