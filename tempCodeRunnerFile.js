
let n=7;

for(let r=1;r<=n;r++){
    for(let c=1;c<=n;c++){
        if(r==1){
            if(c==1 || c>=4){
                process.stdout.write("*");
            }
            else{
                process.stdout.write("-");
            }
        }
        else if(r<4){
            if(c==1 || c==4){
                process.stdout.write("*");
            }
            else{
                process.stdout.write("-");
            }
        }
        else if(r==4){
            process.stdout.write("*");
        }
        else if(r<n){
            if(c==4 || c==n){
                process.stdout.write("*");
            }
            else{
                process.stdout.write("-");
            }
        }
         else if(r==n){
            if(c<=4 || c==n){
                process.stdout.write("*");
            }
            else{
                process.stdout.write("-");
            }
        }
        else{
            process.stdout.write(" ");
        }


    }
    console.log()
}