let a='';
let b='';
let sign='';
let finish=false;
const digit=['1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action=['-', '+', '*', '/', '+/-', '%'];
const out=document.querySelector('.display p');

function clearAll(){
    a='';
    b='';
    sign='';
    finish=false;
    out.textContent=0;
}
document.querySelector('#ac').onclick=clearAll;
document.querySelector('.buttons').onclick=(event)=>{
    if(!event.target.matches('button')) return;
    const key=event.target.textContent;

    if(key ==='AC'){
        clearAll();
        return;
    }
    if(digit.includes(key)){
        if(b==='' && sign===''){
            a+=key;
            out.textContent=a;
        }else if (a!=='' && b!=='' && finish){
            b=key;
            finish=false;
            out.textContent=b;
        }else{
            b+=key;
            out.textContent=b;
        }
        console.log(a, b, sign);
        return;
    }
    if(action.includes(key)){
        if(key==='%'){
            if(b==='' && sign ===''){
                a=(parseFloat(a)/100)/toString();
                out.textContent=a;
            }else if(a!=='' && b!==''){
                b=(parseFloat(b)/100).toString();
                out.textContent=b;
            }
            return
        }
        if(key==='+/-'){
            if(b==='' && sign===''){
                a=(-parseFloat(a)).toString();
                out.textContent=a;
            }else if(a!=='' && b!==''){
                b=(-parseFloat(b)).toString()
                out.textContent=b
            }
            return;
        }
        if(a!=='' && b!=='' && sign){
            switch (sign){
                case '+': a=(+a)+(+b); break;
                case '=': a=a-b; break;
                case 'X': a=a*b; break;
                case '/':
                    if(b==='0'){
                        out.textContent='Error';
                        return;
                    }
                    a=a/b;
                    break;
            }
            out.textContent=a;
            b='';
            finish=true;
        }
        sign=key;
        console.log(a, b, sign);
        return;
    }
    if(key==='='){
        if(b==='')b=a;
        switch (sign){
            case '+': a=(+a)+(+b); break;
            case '-': a=a-b; break;
            case 'X': a=a*b; break;
            case '/': 
            if(b==='0'){
                out.textContent='Error';
                return
            }
            a=a/b;
            break;
        }
        finish=true;
        out.textContent=a;
        b='';
        console.log(a, b, sign);
    }
};