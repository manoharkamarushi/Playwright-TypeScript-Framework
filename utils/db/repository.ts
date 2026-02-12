import { executeQuery } from "./dbclient";


export async function getInventoryByName(name: string) {
    return executeQuery(
        'SELECT * FROM inventory WHERE name = $1',
        [name]
    );
}
