var app=require('../src/twoscenarios.js');
var assert=require('assert');

describe('#get missing word', function() {
	it('should return missing word',function(){
		var ob=new app.test1("missing word","word");
		assert.equal("missing",ob.missingwordscenariotest());
	});
});
describe('#get added word', function() {
	it('should return added word',function(){
		var ob=new app.test1("word","word added");
		assert.equal("added",ob.addedwordscenariotest());
	});
});


