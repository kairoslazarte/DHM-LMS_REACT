import bcrypt from 'bcryptjs'

const dhmAdmins = [
    {
        first_name: 'System',
        middle_name: 'Admin',
        last_name: 'DHM',
        full_name: 'System Admin DHM',
        email: 'dhm-system_admin@dhm.com',
        password: bcrypt.hashSync('@dhmAdmin#2025!Jeremiah29:11', 10),
        phone: '09063475153',
    },
]

export default dhmAdmins