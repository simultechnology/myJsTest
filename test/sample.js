/**
 * Created by zdc on 2015/09/04.
 */

var expect    = require("chai").expect;
var sample = require("../app/sample");

describe("sample", function() {
    describe("add()", function() {
        it("should return total ", function(){
            //Test Goes Here
            var add = sample.add(4, 5);

            expect(add).to.equal(9);
        });
    });

    describe("multiple()", function() {
        it("should return the number of args  ", function(){
            //Test Goes Here
            var m = sample.multiple(5, 7, 8, 0, 'aa');

            expect(m).to.equal(5);
        });
    });
});