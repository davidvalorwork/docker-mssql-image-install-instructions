const sql = require("mssql");

const config = {
  user: "sa",
  password: "super_duper_password",
  server: "localhost",
  database: "testdb",
  options: {
    enableArithAbort: true,
  },
};

const run = async () => {
  let pool;
  try {
    console.log("Connection Opening...");
    pool = await sql.connect(config);
    const { recorset } = await sql.query`select * from users;`;
    console.log(recorset);
  } catch (err) {
    console.log(err);
  } finally {
    await pool.close();
    console.log("Connection close");
  }
};

run();