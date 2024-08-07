console.log('Seja bem vindo! Cadrastre as informações nos camopos abaixo.');
$(document).ready(function () {
    function calcularValorTotal() {
        $('#tabelaProdutos tbody tr').each(function () {
            let quantidade = $(this).find('.quantidade').val();
            let valorUnitario = $(this).find('.valorUnitario').val();
            let valorTotal = quantidade * valorUnitario;
            $(this).find('.valorTotal').val(valorTotal.toFixed(2));
        });
    }

    $('#adicionarProduto').click(function () {
        $('#tabelaProdutos tbody').append(`
            <tr>
                <td><input type="text" class="form-control" required></td>
                <td><input type="text" class="form-control" required></td>
                <td><input type="number" class="form-control quantidade" required></td>
                <td><input type="number" class="form-control valorUnitario" step="0.01" required></td>
                <td><input type="text" class="form-control valorTotal" readonly></td>
                <td><button type="button" class="btn btn-danger btn-sm btnExcluir">Excluir</button></td>
            </tr>
        `);
    });

  
    $('#adicionarAnexo').click(function () {
        let fileInput = $('#anexo')[0];
        if (fileInput.files.length > 0) {
            let file = fileInput.files[0];
            let reader = new FileReader();
            reader.onload = function (e) {
                let base64 = e.target.result.split(',')[1];
                $('#tabelaAnexos tbody').append(`
                    <tr>
                        <td>${file.name}</td>
                        <td>
                            <button type="button" class="btn btn-info btn-sm btnVisualizar" data-file="${base64}">Visualizar</button>
                            <button type="button" class="btn btn-danger btn-sm btnExcluirAnexo">Excluir</button>
                        </td>
                    </tr>
                `);
                $('#anexo').val('');
            };
            reader.readAsDataURL(file);
        }
    });

    $(document).on('click', '.btnExcluirAnexo', function () {
        $(this).closest('tr').remove();
    });
})
