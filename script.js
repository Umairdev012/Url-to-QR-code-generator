$(document).ready(function () {

    let qr;

    $('#generateBtn').click(function () {

        const url = $('#urlInput').val().trim();

        if (url === '') {
            alert('Please enter a valid URL');
            return;
        }

        $('#qrContainer').html('');

        qr = new QRCode(document.getElementById('qrContainer'), {
            text: url,
            width: 250,
            height: 250,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });

    });

    $('#downloadBtn').click(function () {

        const img = $('#qrContainer img');

        if (img.length === 0) {
            alert('Generate QR code first');
            return;
        }

        const imageSrc = img.attr('src');

        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'qr-code.png';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    });

});