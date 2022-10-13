function isLastPosition (A,B,C){
     if(B <= ((A-1)+C)){
        return A+C-1;
     }
     B = B - (A-C+1);
     return (B%A == 0) ? A : (B%A)
}
console.log(isLastPosition(5,8,2))