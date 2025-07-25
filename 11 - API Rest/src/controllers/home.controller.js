class HomeController{
  async index(req,res) {
    res.json('API running')
  }
}

export default new HomeController();
