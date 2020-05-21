module.exports = {

    index(req, res){
        return res.status(200).send('respond with all countries? ');
    },

    add(req, res){
        return res.status(200).send('Add a country');
    },

    delete(req, res){
        return res.status(200).send('Delete a country');
    },

    edit(req, res){
        return res.status(200).send('Edit a country');
    }

}