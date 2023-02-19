import { DatabaseConnection } from "../../database-connection";

const db = DatabaseConnection.getConnection()

export function getAllCats () {
    return new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'select * from cats',
                [],
                (txObj, resultSet) => {
                    resolve(resultSet.rows._array);
                },
                (txObj, error) => {
                    reject(error)
                }
            )
        })
    })
} 