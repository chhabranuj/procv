import sqlite3 from "sqlite3";
import { open } from "sqlite";

const GetUserData = async (req: any, res: any) => {
  const db = await open({
    filename: "./procv.db",
    driver: sqlite3.Database,
  });

  const result = await db.all("SELECT * FROM userData");
  res.send({ result });
};

export default GetUserData;
