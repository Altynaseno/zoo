$(document).ready(function() {
    
    // --- 1. SELECTORS, CSS & EFFECTS ---
    $('#btn-hide').click(function() { 
        $('#text-target').hide(); 
    });

    $('#btn-show').click(function() { 
        $('#text-target').show(); 
    });

    $('#btn-toggle').click(function() { 
        $('#text-target').toggle()
            .text('Content visibility toggled!')
            .css({'color': '#0d6efd', 'font-weight': 'bold'});
    });

    $('#btn-fade').click(function() {
        $('#fade-img').fadeToggle(1000);
    });

    // --- 2. DOM MANIPULATION ---
    $('#btn-add').click(function() {
        $('#my-list').append('<li class="list-group-item list-group-item-action">New Dynamic Item</li>');
    });

    $('#btn-remove').click(function() {
        $('#my-list li:last').remove();
    });

    $('#btn-attr').click(function() {
        $('#fade-img').attr('src', 'https://picsum.photos/300/200?random=' + Math.random());
        $('#demo-link').attr('href', 'https://github.com/Altynaseno/zoo')
            .text('Link updated to Project Repository');
    });

    // --- 3. ANIMATIONS ---
    $('#btn-animate').click(function() {
        let box = $('#box');
        box.animate({ left: '150px', width: '100px', opacity: 0.6 }, 800)
           .animate({ top: '60px', height: '100px' }, 600)
           .animate({ width: '40px', height: '40px', opacity: 1 }, 500)
           .animate({ left: '0', top: '0' }, 800);
    });

    // --- 4. GUESSING GAME ---
    let targetNumber = Math.floor(Math.random() * 100) + 1;

    $('#btn-guess').click(function() {
        let userVal = parseInt($('#guess-input').val());
        let msg = $('#game-msg');
        
        msg.removeClass('d-none alert-success alert-danger alert-info');

        if (isNaN(userVal)) {
            msg.addClass('alert-danger').text("Please enter a valid number!");
        } else if (userVal === targetNumber) {
            msg.addClass('alert-success').text("🎉 Correct! The number was " + targetNumber + ". Restarting...");
            setTimeout(() => { location.reload(); }, 3000);
        } else if (userVal > targetNumber) {
            msg.addClass('alert-info').text("Too high! Try a lower number.");
        } else {
            msg.addClass('alert-info').text("Too low! Try a higher number.");
        }
    });
});