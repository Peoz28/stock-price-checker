const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  likes: {
    type: Number,
    default: 0
  },
  likedIPs: [{
    type: String
  }]
}, {
  timestamps: true
});

// Phương thức để kiểm tra xem một IP đã like cổ phiếu này chưa
stockSchema.methods.hasLiked = function(ip) {
  return this.likedIPs.includes(ip);
};

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock; 