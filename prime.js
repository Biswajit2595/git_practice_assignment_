let num=4;
let prime=((num)=>{
    if(num<=1)
    {
        return false;
    }
    else
    {
        let factors=0;
        for(let a=2;a<num;a++)
        {
            if(num%a===0)
            {
                factors++;
            }
        }
        if(factors===0)
        {
            return true;
        }
    }
    return false;

})

let res=prime(num);
console.log(res);