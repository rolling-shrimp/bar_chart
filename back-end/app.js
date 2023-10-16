const express = require("express");
const connection = require("./mysqlDB");
var cors = require("cors");

require("dotenv").config(); // 导入dotenv模块，加载环境变量
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/fetchData", (req, res) => {
  console.log(req.query);
  const { judgeTheme, region, sales_year, type } = req.query;
  connection.query(
    `select sales_person.person, record.${judgeTheme} from sales_person  inner join record on record.sales_id = sales_person.id  where sales_person.region='${region}' and record.sales_year=${sales_year} and record.type='${type}' ORDER BY record.${judgeTheme} DESC  `,
    (err, rows) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.json(rows);
      }
    }
  );
});

app.listen("3505", () => {
  console.log("port 3505 receiving request");
});
