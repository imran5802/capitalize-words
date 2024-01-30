(function($) {
    $.fn.capitalizeWords = function() {
        return this.each(function() {
            var element = $(this);

            function capitalizeWord(word) {
                return word.replace(/(^[a-z])|([\s\(\)\$\.\#][a-z])/g, function(match) {
                    return match.toUpperCase();
                });
            }

            if (element.is('input, textarea')) {
                // Handle input and textarea elements
                var input = element.get(0); // Get the DOM element

                // Save the current cursor position
                var start = input.selectionStart;
                var end = input.selectionEnd;

                var text = element.val();
                var words = text.split(/\s+/);

                for (var i = 0; i < words.length; i++) {
                    words[i] = capitalizeWord(words[i]);
                }

                element.val(words.join(' '));

                // Restore the cursor position
                input.setSelectionRange(start, end);
            } else {
                // Handle other elements like div, span, etc.
                var textNode = element.contents().filter(function() {
                    return this.nodeType === 3; // Text node
                }).get(0); // Get the first text node

                if (textNode) {
                    var text = textNode.textContent;
                    var words = text.split(/\s+/);

                    for (var i = 0; i < words.length; i++) {
                        words[i] = capitalizeWord(words[i]);
                    }

                    textNode.textContent = words.join(' ');
                }
            }
        });
    };
})(jQuery);