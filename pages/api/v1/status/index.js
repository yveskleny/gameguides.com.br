function Home(request, response) {
  response.status(200).json({
    chave: "my api response",
  });
}

export default Home;
