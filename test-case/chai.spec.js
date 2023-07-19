var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
//------------- Assert------------//
describe('------Aspect check-------',function(){

    let userName = 'Pratibha Sharma';
    let mylist = {
        item:[{
            id:1,name:'demo'
        }],
        title:'user list'
    }
    it("check string",function(){
        assert.typeOf(userName,'string');
    })

    it("equal match",function(){
        assert.equal(userName,'Pratibha Sharma');
    })

    it("length match",function(){
        assert.lengthOf(mylist.item,1);
    })
})
//-----------should----------//
describe('------should check-------', function(){
    let userName = "Pratibha Sharma";
    let mylist = {
        item:[{
            id:1,name:'demo'
        }],
        title:'user list'
    }
    it('check string',function(){
        userName.should.be.a('string');
    })

    it('equal check',function(){
        userName.should.equal('Pratibha Sharma');
    })

    it('length check ',function(){

        mylist.should.have.property('item').with.lengthOf(1);
    })
});
//------------- Expect------------//
describe("-------check expect-------", function(){
    let userName = 'Pratibha Sharma';
    let mylist = {
        item:[{
            id: 1, name:'demo'
        }],
        title: 'user list',
        address:{
            country: ['India','America'],
            phoneNo: ['827387633','2763723253']
        }
    }

    it("string match", function(){
        expect(userName).to.be.a("string")
    });

    
    it("equal match", function(){
        expect(userName).to.equal("Pratibha Sharma")
    });

    
    it("length match", function(){
        expect(userName).to.lengthOf(15)
    });

    it('object match', function(){
        expect(mylist).to.have.property('item').with.lengthOf(1)
    });


    it(' api object match', function(){
        expect(mylist).to.have.all.keys('item','title','address')
    });

    it('phone no', function(){
        expect(mylist).to.have.nested.property('address.phoneNo[0]')
    });
    // it('country name', function(){
    //     expect(mylist).to.have.nested.include({'address.country':'India'})
    // });
    it('country name1', function(){
        expect(mylist).to.have.nested.property('address.country[0]');
    });
    it('country name2', function(){
        expect(mylist).to.have.nested.property('address.country[1]');
    });
})
