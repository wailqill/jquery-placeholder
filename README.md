Placeholder polyfill
====================

A simple jQuery plugin enabling the placeholder functionality from HTML5 of form fields for browsers not yet natively supporting it.

Simplest usage scenario, just include the plugin file and add an ´<input>´ with a placeholder attribute:

```javascript
<input placeholder="My helpful text">
```

It hooks up all form fields on the page on dom ready. When adding code dynamically, run something similar to this:

```javascript
$node.find('input[placeholder], textarea[placeholder]').placeholder();
```

Also supports:

```javascript
$node.placeholder('class_name');
$node.placeholder('class_name', 'attr_name');
```
    
`attr_name` and `class_name` both defaults to 'placeholder'.

Additional info: $(...).val() is overridden and changed so that it doesn't return the placeholder string when trying to get the value from the field with jQuery when it's 'empty'.
