import User from "../models/User";
// import { createPasswordHash } from "../services/auth";

class UsersController {
  // Método para listar todos os usuários.
  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Método para listar um usuário específico.
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Método para criar um usuário.
  async create(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        return res.status(422).json({ error: `User ${email} already exists` });
      }

      // To-do - Adicionar Criptografia de senha.

      const newUser = await User.create({
        email,
        password,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Método para atualizar um usuário.
  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // To-do - Adicionar Criptografia de senha.

      await user.updateOne({ email, password });
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Método para deletar um usuário.
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.deleteOne();
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new UsersController();
