document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("mudarCorBotao").addEventListener('click', function () {
        for (let i = 0; i < 100; i++) {
            setTimeout(function () {
                document.body.style.backgroundColor = document.body.style.backgroundColor === 'red' ? 'blue' : 'red';
                const p = document.getElementById('paragrafo');
                p.style.color = document.body.style.backgroundColor === 'red' ? 'black' : 'white';
                p.style.fontSize = '32px';
                p.style.fontWeight = document.body.style.backgroundColor === 'red' ? 600 : 1200;
            }, (10 - i) * 1000)
        }



    });
});
