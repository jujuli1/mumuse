const middleware404 = (req, res) => {
    res.status(404).render('notFound');
  };
  
  module.exports = middleware404;