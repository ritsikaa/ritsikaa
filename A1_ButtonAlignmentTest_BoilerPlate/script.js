document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.chaotic-evil').forEach(button => {
        button.addEventListener('click', () => {
            alert('HEAVY CHAOS UNLEASHED!');
        });
    });
});