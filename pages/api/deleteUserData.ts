import sqlite3 from "sqlite3";
import { open } from "sqlite";

const DeleteUserData = async (req: any, res: any) => {
  const db = await open({
    filename: "./procv.db",
    driver: sqlite3.Database,
  });

  db.run(`DELETE FROM userData where id=${req.body.id}`, (err: any) => {
    if (err) {
      console.log(err);
    }
  });
};

export default DeleteUserData;
