$(document).ready(function() {
    $('input').on('input', function() {
        $(this).addClass('interacted');
        if (this.checkValidity()) {
            $(this).css('border', '2px solid green');
        } else {
            $(this).css('border', '2px solid red');
        }
    });

    $('#cadastro').on('click', function(e) {
        var is_valid = true;
        $('input').each(function() {
            // Marcar o input como interacted se ainda não foi
            $(this).addClass('interacted');
            if (!this.checkValidity()) {
                is_valid = false;
            }
        });

        // Atualizar a estilização
        $('.interacted').each(function() {
            if (this.checkValidity()) {
                $(this).css('border', '2px solid green');
            } else {
                $(this).css('border', '2px solid red');
            }
        });

        if (!is_valid) {
            e.preventDefault();
            $('#mensagem').text('Por favor, corrija os erros antes de enviar.');
        } else {
            cadastrar(); // chama a função de cadastro quando todos os campos são válidos
        }
    });
});


