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
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

File.virtual('url').get(function() {
  return `http://localhost:3333/files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model("File", File);