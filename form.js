document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.form-input').forEach(function (input) {
        input.addEventListener('input', function() {
            input.className = input.className.replace(/form-input-error ?/, '');
        });
    });
});