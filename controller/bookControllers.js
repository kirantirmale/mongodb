var fs = require('fs');
const db = require("../config/db");
const {Book} = db

exports.getdata = async(req, res) => {
    try {     
        let data =await Book.findAll();
        console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({message: error});
    }
}

exports.adddata = async(req, res) => {
    try {
        let data =await Book.create(req.body);    
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
exports.updatedata = async (req, res) => {
    try {
        let data = await Book.update(req.body,{where:{ id:req.query.id } });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}
exports.getonedata = async (req, res) => {
    try {
        let data = await Book.findByPk(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({ message: error.message });    
    }
}


exports.deletedata = async (req, res) => {
    try {
        let data = await Book.destroy({
            where: {
              id: req.query.id
            }
          });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}