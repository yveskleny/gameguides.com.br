import database from "../../../../infra/database.js";

async function Home(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({
    chave: "my api response",
  });
}

export default Home;
