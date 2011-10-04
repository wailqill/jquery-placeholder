Specking
  .with({
    jasmine: true,
    DOM: true,
    jQuery: "$"
  })
  .do(function() {
    this.nativeCreateElement = document.createElement;
    document.createElement = function() {
      return { placeholder: true };
    };
  })
  .load('../src/jquery.placeholder.js')
  .do(function() {
    document.createElement = this.nativeCreateElement;
  });

describe("handles native support transparently", function () {
  it("should not be active when placeholder support is native", function () {
    var elm = $('<input placeholder="foo" />').placeholder();
    expect(elm.hasClass('placeholder')).toBeFalsy();
  });
});
