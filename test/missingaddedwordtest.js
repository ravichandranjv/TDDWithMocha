var app=require('../src/twoscenarios.js');
var assert=require('assert');

describe('#get missing word', function() {
	it('should return missing word',function(){
		var ob=new app.twoscenarios("missing word","word");
		assert.equal("missing",ob.missingwordscenariotest());
	});
});
describe('#get added word', function() {
	it('should return added word',function(){
		var ob=new app.twoscenarios("word","word added");
		assert.equal("added",ob.addedwordscenariotest());
	});
});


