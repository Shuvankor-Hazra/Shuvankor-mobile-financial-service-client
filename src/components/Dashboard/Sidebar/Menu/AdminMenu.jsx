import { FaHome, FaUser } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { FaCircleDollarToSlot } from "react-icons/fa6";

const AdminMenu = () => {
    return (
        <>
            {/* Admin Dashboard */}
            <MenuItem
                label='Admin Dashboard'
                address='/adminDashboard'
                icon={FaHome} />

            {/* Manage Users */}
            <MenuItem
                label='Manage Users'
                address='/manageUsers'
                icon={FaUser} />

            {/* All Transactions */}
            <MenuItem
                label='All Transactions'
                address='/allTransactions'
                icon={FaCircleDollarToSlot} />
        </>
    )
}

export default AdminMenu