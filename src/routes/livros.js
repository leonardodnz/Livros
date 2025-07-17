const router = require('express').Router();
const controller = require('../controllers/livrosController');

router.get('/', controller.listarLivros);
router.get('/:id', controller.obterLivro);
router.post('/', controller.criarLivro);
router.put('/:id', controller.atualizarLivro);
router.delete('/:id', controller.deletarLivro);

module.exports = router;