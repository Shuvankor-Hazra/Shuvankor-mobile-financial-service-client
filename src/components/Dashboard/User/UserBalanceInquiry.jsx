import Heading from "../../Shared/Heading";


const UserBalanceInquiry = () => {
    return (
        <>
            <Heading title={'User Balance Inquiry'} subtitle={'Mobile Financial Service (MFS)'} center />
            <div className=" max-w-2xl mx-auto flex gap-2 items-center justify-center mt-52 text-3xl font-bold ">
                <h1>Total Amount:</h1>
                <span className="">5000</span>
                <h1>Tk.</h1>
            </div>
        </>
    );
}

export default UserBalanceInquiry;
