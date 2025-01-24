let count = 0;

function myfunc(check, i) {
    if (check.value === false) {
        count++;
        document.getElementById('count').innerHTML = `Score: ${count}`;
        check.value = true;
        let temp = document.getElementById(`box${i}`);
        temp.style.display = "none";
    }
}

 
let target=30
for (let i = 1; i <= target; i++) {
    setTimeout(() => {
        let x = Math.round(Math.random() * 10000) % 1500;
        let y = Math.round(Math.random() * 10000) % 650;
        x = Math.max(x, 100);

        let div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute("id", `box${i}`);
        div.style.position = 'absolute';
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;

        let check = { value: false };
        div.addEventListener("click", () => myfunc(check, i));

        document.body.appendChild(div);

        
        setTimeout(() => {
            if (!check.value) {
                div.style.display = "none";
            }
        }, 3000);
    }, i * 500);
}

setTimeout(() => {
    document.getElementById('result').style.display = "flex";
    document.getElementById('hits').innerHTML = `${count} Hits`;
    document.getElementById('misses').innerHTML = `${target - count} Misses`;
    document.getElementById('rate').innerHTML = `${(count / target).toFixed(2)} Per Second`;
}, (target) * 500+3000);
