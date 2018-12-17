const expect = require('chai').expect;

const { policy } = require('../../routes/policy');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    },
    status: function(arg) { 
        this.sendCalledWith = arg;
        return res;
    }
};

describe('Policy list route', function() {
    describe('list function', function() {
        it('Should return a list of policies', function() {            
            policy(req, res);
            expect(res.length > 0);
            console.log(res);
        });

    })
});