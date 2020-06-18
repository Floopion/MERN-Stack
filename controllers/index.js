module.exports = {
  // Module just returns an ok status the correct pug view and the title of the page
    index(req, res){
      return  res.status(200).render('index', { title: 'Country Visualization Admin Panel' });
    },

}