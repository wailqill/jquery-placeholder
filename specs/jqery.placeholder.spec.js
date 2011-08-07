var $ = window.jQuery;

describe('Placeholder polyfill', function() {
  describe("should be a jQuery plugin", function() {
  	it('should expose a jQuery method', function() {
  		expect($.fn.placeholder).toBeDefined();
  	});
  	it("should be chainable", function() {
  	  var elm = $('<div><input /><input /><input /></div>').find('input');
  		expect(elm.placeholder()).toEqual(elm);
  	});
  });
	
	describe("add a class name to the element", function() {
  	it("should add default class name 'placeholder'", function() {
  		var elm = $('<input placeholder="test" />').placeholder()[0];
  		expect(elm.className).toBe('placeholder');
  	});

  	it("should add a customizable class name to the element", function() {
  		var elm = $('<input placeholder="test" />').placeholder('custom')[0];
  		expect(elm.className).toBe('custom');
  	});
	});
	
	describe("should use the placeholder attribute", function() {
  	it("should set the value of the input to the placeholder value when invoked", function() {
  		var elm = $('<input placeholder="test" />').placeholder()[0];
  		expect(elm.value).toBe('test');
  	});

  	it("adds the specified attribute name to the element", function() {
  		var elm = $('<input custom="test" />').placeholder('whatever', 'custom')[0];
  		expect(elm.value).toBe('test');
  	});
	});
	
	describe("patches jQuery.val()", function() {
	  it("should make val() not return the placeholder value", function() {
  		var elm = $('<input placeholder="test" />').placeholder();
  		expect(elm.val()).toBe('');
	  });
	});
	
	describe("handles focus and blur", function() {
	  it("should remove placeholder value on focus", function() {
  		var elm = $('<input placeholder="test" />').placeholder();
  		elm.focus();
  		expect(elm[0].value).toBe('');
	  });
	  it("should restore placeholder value on blur if field is empty", function() {
  		var elm = $('<input placeholder="foo" />').placeholder();
  		elm.focus().blur();
  		expect(elm[0].value).toBe('foo');
	  });
	  it("should not restore placeholder value if user entered text into field", function() {
	    var elm = $('<input placeholder="foo" />').placeholder();
  		elm.focus().val('bar').blur();
  		expect(elm[0].value).toBe('bar');
	  });
	});
  
  // How to handle this. I want to cache the test for native support, but I also
  // wanna control it in each spec. And takers?
  // describe("hadles native support transparently", function() {
  //   it("should not be active when placeholder support is native", function() {
  //     spyOn(window.document, "createElement").andCallFake(function() {
  //       return { placeholder: true };
  //     });
  //      var elm = $('<input placeholder="foo" />').placeholder();
  //      expect(elm.hasClass('placeholder')).toBeFalsy();
  //   });
  // });
});