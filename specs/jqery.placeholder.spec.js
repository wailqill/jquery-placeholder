var $ = window.jQuery;

function c(s) {
	console.log(s);
}

describe('Placeholder polyfill', function() {
	it('should expose a jQuery method', function() {
		expect($.fn.placeholder).toBeDefined();
	});
	
	it("should be chainable", function() {
	  var elm = $('<input />');
		expect(elm.placeholder()).toEqual(elm);
	});
	
	describe("adds a class name and", function() {
  	it("should be 'placeholder'", function() {
  		var elm = $('<input placeholder="test" />').placeholder()[0];
  		expect(elm.className).toBe('placeholder');
  	});

  	it("should be customizable", function() {
  		var elm = $('<input placeholder="test" />').placeholder('whatever', 'custom')[0];
  		expect(elm.className).toBe('custom');
  	});
	});
	
	it("should set the value of the input to the placeholder value when invoked", function() {
		var elm = $('<input placeholder="test" />').placeholder()[0];
		expect(elm.value).toBe('test');
	});
	
	it("adds the specified attribute name to the element", function() {
		var elm = $('<input custom="test" />').placeholder('custom')[0];
		expect(elm.value).toBe('test');
	});
	
	describe("patches jQuery", function() {
	  it("should make val() not return the placeholder value", function() {
  		var elm = $('<input placeholder="test" />').placeholder();
  		expect(elm.val()).toBe('');
	  });
	});
  // 
  // it("should not be active when placeholder support is native", function() {
  //   spyOn(document, "createElement");// = function() { return { placeholder: true }; };
  //   // TODO: implement this spec!
  // });
});