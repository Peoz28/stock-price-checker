const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

const app = require('../server.js');

describe('Functional Tests', function() {
  this.timeout(5000);
  
  describe('GET /api/stock-prices', function() {
    // Test 1: Xem một mã cổ phiếu
    it('1. Xem một mã cổ phiếu', function(done) {
      chai.request(app)
        .get('/api/stock-prices')
        .query({ stock: 'GOOG' })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('stockData');
          expect(res.body.stockData).to.have.property('stock');
          expect(res.body.stockData).to.have.property('price');
          expect(res.body.stockData).to.have.property('likes');
          expect(res.body.stockData.stock).to.equal('GOOG');
          expect(res.body.stockData.price).to.be.a('number');
          expect(res.body.stockData.likes).to.be.a('number');
          done();
        });
    });
    
    // Test 2: Xem một mã cổ phiếu và like nó
    it('2. Xem một mã cổ phiếu và like nó', function(done) {
      chai.request(app)
        .get('/api/stock-prices')
        .query({ stock: 'AAPL', like: true })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('stockData');
          expect(res.body.stockData).to.have.property('stock');
          expect(res.body.stockData).to.have.property('price');
          expect(res.body.stockData).to.have.property('likes');
          expect(res.body.stockData.stock).to.equal('AAPL');
          expect(res.body.stockData.price).to.be.a('number');
          expect(res.body.stockData.likes).to.be.a('number');
          expect(res.body.stockData.likes).to.be.at.least(1);
          done();
        });
    });
    
    // Test 3: Xem cùng một mã cổ phiếu và like nó lần nữa
    it('3. Xem cùng một mã cổ phiếu và like nó lần nữa', function(done) {
      chai.request(app)
        .get('/api/stock-prices')
        .query({ stock: 'AAPL', like: true })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('stockData');
          expect(res.body.stockData).to.have.property('stock');
          expect(res.body.stockData).to.have.property('price');
          expect(res.body.stockData).to.have.property('likes');
          expect(res.body.stockData.stock).to.equal('AAPL');
          expect(res.body.stockData.price).to.be.a('number');
          expect(res.body.stockData.likes).to.be.a('number');
          // Số lượng likes không tăng vì cùng IP
          done();
        });
    });
    
    // Test 4: Xem hai mã cổ phiếu
    it('4. Xem hai mã cổ phiếu', function(done) {
      chai.request(app)
        .get('/api/stock-prices')
        .query({ stock: ['GOOG', 'MSFT'] })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('stockData');
          expect(res.body.stockData).to.be.an('array');
          expect(res.body.stockData).to.have.lengthOf(2);
          
          // Kiểm tra phần tử đầu tiên
          expect(res.body.stockData[0]).to.have.property('stock');
          expect(res.body.stockData[0]).to.have.property('price');
          expect(res.body.stockData[0]).to.have.property('rel_likes');
          expect(res.body.stockData[0].stock).to.equal('GOOG');
          expect(res.body.stockData[0].price).to.be.a('number');
          expect(res.body.stockData[0].rel_likes).to.be.a('number');
          
          // Kiểm tra phần tử thứ hai
          expect(res.body.stockData[1]).to.have.property('stock');
          expect(res.body.stockData[1]).to.have.property('price');
          expect(res.body.stockData[1]).to.have.property('rel_likes');
          expect(res.body.stockData[1].stock).to.equal('MSFT');
          expect(res.body.stockData[1].price).to.be.a('number');
          expect(res.body.stockData[1].rel_likes).to.be.a('number');
          
          // Kiểm tra rel_likes đối nhau
          expect(res.body.stockData[0].rel_likes).to.equal(-res.body.stockData[1].rel_likes);
          
          done();
        });
    });
    
    // Test 5: Xem hai mã cổ phiếu và like chúng
    it('5. Xem hai mã cổ phiếu và like chúng', function(done) {
      chai.request(app)
        .get('/api/stock-prices')
        .query({ stock: ['GOOG', 'MSFT'], like: true })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('stockData');
          expect(res.body.stockData).to.be.an('array');
          expect(res.body.stockData).to.have.lengthOf(2);
          
          // Kiểm tra phần tử đầu tiên
          expect(res.body.stockData[0]).to.have.property('stock');
          expect(res.body.stockData[0]).to.have.property('price');
          expect(res.body.stockData[0]).to.have.property('rel_likes');
          expect(res.body.stockData[0].stock).to.equal('GOOG');
          expect(res.body.stockData[0].price).to.be.a('number');
          expect(res.body.stockData[0].rel_likes).to.be.a('number');
          
          // Kiểm tra phần tử thứ hai
          expect(res.body.stockData[1]).to.have.property('stock');
          expect(res.body.stockData[1]).to.have.property('price');
          expect(res.body.stockData[1]).to.have.property('rel_likes');
          expect(res.body.stockData[1].stock).to.equal('MSFT');
          expect(res.body.stockData[1].price).to.be.a('number');
          expect(res.body.stockData[1].rel_likes).to.be.a('number');
          
          // Kiểm tra rel_likes đối nhau
          expect(res.body.stockData[0].rel_likes).to.equal(-res.body.stockData[1].rel_likes);
          
          done();
        });
    });
  });
}); 