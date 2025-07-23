class HomeController{
  async index(req,res) {
    res.json('API funcionando')
  }
}

export default new HomeController();
