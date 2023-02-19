import { DatabaseConnection } from "../../database-connection";

const db = DatabaseConnection.getConnection()

export function deleteCat (catID) {
    return new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'delete from cats where catID = ?',
                [catID],
                (txObj, resultSet) => {
                    resolve(resultSet.rowsAffected)
                },
                (txObj, error) => {
                    reject(error)
                }
            )
        })
    })
}