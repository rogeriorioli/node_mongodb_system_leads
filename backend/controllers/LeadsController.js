const mongoose = require('mongoose')

const Lead = mongoose.model('Leads')

module.exports = {
  async index(req, res) {
    const leads  = await Lead.find();
    return res.json(leads);
  },
  async store(req, res ) {
    const lead = await Lead.create(req.body);

    return res.json(Lead);
  },
  async show(req, res ) {
    const lead= await Lead.findById(req.params.id);

    return res.json(Lead);
  },
  async update(req, res ) {
    const lead= await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(Lead);
  },
  async destroy(req, res ) {
     await Lead.findByIdAndDelete(req.params.id);

    return res.send('deletado com sucesso');
  }
}