module.exports = {

    index(req, res){
      return  res.status(200).render('index', { title: 'Please Select a Country' });
    },

}