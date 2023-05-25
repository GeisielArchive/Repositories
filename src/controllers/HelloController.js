class HelloController {
    async index(req, res) {
        return res.json({msg: 'Hello World!'});
    }
}

export default new HelloController();