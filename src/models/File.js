const mongoose = require('mongoose');

const File = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
}, {
  // createdAt and updatedAt em cada registro da minha tabela (schema)
  timestamps: true
});

module.exports = mongoose.model("File", File);