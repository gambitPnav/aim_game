
for (let i = 1; i <= 30; i++) 
    {

    setTimeout(()=>{
    let x = Math.round(Math.random() * 10000);
    let y = Math.round(Math.random() * 1000);
    x=x%1500;
    y=y%700;
    console.log(x)
    console.log(y)

    var div = document.createElement('div')
    div.classList.add('box')
    div.style.position = 'absolute';
    div.style.left = (x + 'px')
    div.style.top = (y + 'px')
    document.body.appendChild(div)}, i*1000);
    // dela

}
