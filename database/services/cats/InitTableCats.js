import { DatabaseConnection } from "../../database-connection";

const db = DatabaseConnection.getConnection()

export function initTableCats () {
    return new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`create table if not exists cats
                (
                    catID integer primary key autoincrement, 
                    catName text not null,
                    catAge integer not null,
                    catBreed text not null,
                    description text
                )`)
        })
    })
}