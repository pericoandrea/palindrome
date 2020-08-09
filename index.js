const initGame = () => {
    document.getElementById('output').textContent = '';
    // document.getElementById('result').textContent = '';
    document.getElementsByTagName('body')[0].style.background = '#3491f4';
    document.getElementById('inputField').value = '';
    document.getElementsByClassName('result')[0].style.display = 'none';
    document.getElementById('result').innerHTML = '';
    document.getElementsByClassName('form')[0].style.display = 'block';
}
const palindromo = () => {
    const input = document.getElementById('input');
    let inputText = input.textContent = document.getElementById('inputField').value.replace(/[^A-zÀ-ÖØ-öø-ÿ ]/g, "");
    document.getElementsByClassName('result')[0].style.display = 'block';
    document.getElementsByClassName('form')[0].style.display = 'none';
    const output = document.getElementById('output');
    const iForward = [...inputText];
    const normalized = inputText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const forward = [...normalized];
    const backward = [...normalized];

    let iterator = 0;
    nIntervId = setInterval(() => {
        if(forward.length > 0) {
            if (forward[0] === ' ' && backward[backward.length - 1] !== ' ') {
                forward.shift()
                output.textContent += iForward[iterator++];
            }
            else if (forward[0] !== ' ' && backward[backward.length - 1] === ' ') {
                input.textContent = input.textContent.slice(0, -1);
                backward.pop();
            }
            else if (forward[0] === backward[backward.length - 1]) {
                input.textContent = input.textContent.slice(0, -1);
                output.textContent += iForward[iterator++];
                forward.shift();
                backward.pop();
            } else {
                document.getElementById('result').innerHTML = '<img src="https://img.icons8.com/emoji/96/000000/cross-mark-button-emoji.png"/>';
                document.getElementsByTagName('body')[0].style.background = '#e64e4e'
                clearInterval(nIntervId);
            }
        } else {
            document.getElementById('result').innerHTML = '<img src="https://img.icons8.com/emoji/96/000000/check-mark-button-emoji.png"/>';
            document.getElementsByTagName('body')[0].style.background = '#62e662'
            clearInterval(nIntervId);
        }
    }, 200);
}