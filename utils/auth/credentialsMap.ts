import { UserRole } from './userRoles';

export const credentialsMap: Record<UserRole, { username: string; password: string }> = {
    champuser: {
        username: process.env.CHAMP_USERNAME!,
        password: process.env.CHAMP_PASSWORD!,
    },
    standarduser: {
        username: process.env.standard_USERNAME!,
        password: process.env.standard_PASSWORD!,
    },
    clientuser: {
        username: process.env.client_USERNAME!,
        password: process.env.client_PASSWORD!,
    },
    poweruser: {
        username: process.env.power_USERNAME!,
        password: process.env.power_PASSWORD!,
    }, 
    adminuser: {
        username: process.env.admin_USERNAME!,
        password: process.env.admin_PASSWORD!,
    },
};
