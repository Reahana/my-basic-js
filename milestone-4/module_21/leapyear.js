function leapYear(y)
{
    if(y%4==0){
      return true;
    }
   
        return false;
    
}

const year=leapYear(2022);
console.log(year);