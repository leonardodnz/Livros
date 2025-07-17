const Livro = require('../models/Livro');

exports.listarLivros = async (req, res, next) => {
  try {
    const livros = await Livro.findAll();
    res.json(livros);
  } catch (err) {
    next(err);
  }
};

exports.obterLivro = async (req, res, next) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json(livro);
  } catch (err) {
    next(err);
  }
};

exports.criarLivro = async (req, res, next) => {
  try {
    const { titulo, autor, preco, estoque } = req.body;
    const livro = await Livro.create({ titulo, autor, preco, estoque });
    res.status(201).json(livro);
  } catch (err) {
    next(err);
  }
};

exports.atualizarLivro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titulo, autor, preco, estoque } = req.body;
    const [updated] = await Livro.update(
      { titulo, autor, preco, estoque },
      { where: { id } }
    );
    if (!updated) return res.status(404).json({ erro: 'Livro não encontrado' });
    const livroAtualizado = await Livro.findByPk(id);
    res.json(livroAtualizado);
  } catch (err) {
    next(err);
  }
};

exports.deletarLivro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Livro.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};