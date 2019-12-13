let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
   // let out = '';
    document.querySelector('#field').innerHTML = '';
    let m = 0;
    for (let i = 0; i < chess.length; i++) {
        let arr = chess[i];
        for (let k = 0; k < arr.length; k++) {
            if (m % 2 == 0) {
                document.querySelector('#field').innerHTML += '<div class="chess-block bg-black"></div>';

            }
            else {
                document.querySelector('#field').innerHTML += '<div class="chess-block"></div>';

            }
            m++;
        }
        m++;
    }
}
draw();