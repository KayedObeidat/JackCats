import { DatabaseConnection } from "../../database-connection";

const db = DatabaseConnection.getConnection()

export function searchForCats (catName, catBreed) {
    return new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'select * from cats where catName like ? or catBreed like ?',
                [`${catName}%`, `${catBreed}%`],
                (txObj, resultSet) => {
                    resolve(resultSet.rows._array)
                },
                (txObj, error) => {
                    reject(error)
                }
            )
        })
    })
}