let num=20;
let prime=((num)=>{
    if(num<=1)
    {
        return false;
    }
    else
    {
        let factors=0;
        for(let i=2;i<num;i++)
        {
            if(num%i===0)
            {
                factors+1;
            }
        }
        if(factors===0)
        {
            return true;
        }
    }
    return false;

})
console.log(prime(num));