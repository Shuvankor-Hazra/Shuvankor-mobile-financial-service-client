import { FaHome } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { FaArrowUpFromBracket, FaCircleDollarToSlot } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";

const AgentMenu = () => {
    return (
        <>
            {/* Admin Dashboard */}
            <MenuItem
                label='Agent Dashboard'
                address='/agentDashboard'
                icon={FaHome} />

            {/* cash-in request  */}
            <MenuItem
                label='Cash In Request'
                address='/agentCashInRequest'
                icon={FaArrowUpFromBracket} />

            {/* cash-out request  */}
            <MenuItem
                label='Cash Out Request'
                address='/agentCashOutRequest'
                icon={FaDownload} />

            {/* Balance Inquiry  */}
            <MenuItem
                label='Balance Inquiry'
                address='/agentBalanceInRequest'
                icon={FaCircleDollarToSlot} />

            {/* Transactions History  */}
            <MenuItem
                label='Transactions History'
                address='/AgentTransactionsHistory'
                icon={MdAccountBalanceWallet} />

        </>
    );
}

export default AgentMenu;
