import sqlite3 from "sqlite3";
import { open } from "sqlite";

const AddUserData = async (req: any, res: any) => {
  try {
    let data: any = [];

    for (const [key, value] of Object.entries(req.body)) {
      data.push(value);
    }

    const db = await open({
      filename: "./procv.db",
      driver: sqlite3.Database,
    });

    const insertSql = `INSERT INTO userData (name, email, phoneNumber, message) VALUES (?, ?, ?, ?)`;

    // Execute insert commands for each value
    await db.run(insertSql, data);
    res.json({ dataAdded: true });
  } catch (error) {
    console.log(error);
    res.json({ dataAdded: false });
  }
};

export default AddUserData;
