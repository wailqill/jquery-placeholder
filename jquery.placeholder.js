/**
 * This file is a  drop in file for  enabling the html 5
 * attribute 'placeholder' on form elements.  It hook up
 * all form fields on the page on dom ready. When adding
 * code dynamically, run something similar to this:
 * 
 * $node.find('input[placeholder], textarea[placeholder]').placeholder();
 * 
 * Also supports
 *     $node.placeholder('attr_name');
 *     $node.placeholder('attr_name', 'class_name')
 *     
 * attr_name and class_name both defaults to 'placeholder'.
 * 
 * Additional info: $(...).val() is overridden and changed
 * so that it doesn't  return the  placeholder string when
 * trying to get the value from the field with jQuery when
 * it's 'empty'.
 * 
 * Url: http://github.com/wailqill/jquery-placeholder
 **/
(function ($) {

    var has_support = 'placeholder' in document.createElement('input'),
        dataKey = 'placeholder-attribute-name';

    $.fn.placeholder = function (a, c) {
        if (has_support) return this;

        var $this = $(this);

        a = a || 'placeholder';
        c = c || a;

        $this.data(dataKey, a);

        var ff = function () {
            $this.removeClass(c);
            if (this.value == this.getAttribute(a))
                this.value = "";
        };

        var fc = function () {
            if (this.value) ff.apply(this);
        };

        this.focus(ff).bind('change keyup keydown', fc);
        this.parents("form").submit(function () {
            $this.find("input").each(f);
        });

        var b = function () {
            var p = this.getAttribute(a);
            if (this.value == p || this.value.match(/^\s*$/)) {
                $this.addClass(c);
                this.value = p;
            }
        };

        this.blur(b);
        return this.each(b);
    };

    if (!has_support) {
        var jqueryVal = $.fn.val;

        $.fn.val = function () {
            if (arguments.length === 0 && this[0].type === 'text') {
                var val = jqueryVal.apply(this);
                if (val === this.attr(this.data(dataKey))) {
                    return '';
                }
            }
            return jqueryVal.apply(this, arguments);
        };
    }

    $(function () {
        if (has_support) return;
        $('input[placeholder], textarea[placeholder]').placeholder();
    });

})(jQuery);


