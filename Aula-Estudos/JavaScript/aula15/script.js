function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res');
    if (ini.value.length == 0 || fim.value.length == 0  ){
        window.alert('[erro] Falta dados')
    } else {
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            alert('passo inavlido, sera considerando passo 1')
            p = 1
        }
        if( i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F603}`

        } else{
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F603}`
        }

        
       
    }
}