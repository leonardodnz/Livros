module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ erro: err.message || 'Erro interno no servidor' });
};