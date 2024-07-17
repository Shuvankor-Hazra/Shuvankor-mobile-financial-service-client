import { FaArrowUpFromBracket, FaCircleDollarToSlot } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { FaDownload, FaHome } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";


const UserMenu = () => {
    return (
        <>
            {/* User Dashboard  */}
            <MenuItem
                label='User Dashboard'
                address='/userDashboard'
                icon={FaHome} />

            {/* cash-in request  */}
            <MenuItem
                label='Cash In Request'
                address='/userCashInRequest'
                icon={FaArrowUpFromBracket} />

            {/* cash-out request  */}
            <MenuItem
                label='Cash Out Request'
                address='/userCashOutRequest'
                icon={FaDownload} />

            {/* Balance Inquiry  */}
            <MenuItem
                label='Balance Inquiry'
                address='/userBalanceInquiry'
                icon={FaCircleDollarToSlot} />

            {/* Transactions History  */}
            <MenuItem
                label='Transactions History'
                address='/userTransactionsHistory'
                icon={MdAccountBalanceWallet} />
        </>
    );
}

export default UserMenu;
