//question****************************************************************************************************

// 1
// 2  2
// 3  3  3
// 4  4  4  4
// 5  5  5  5  5
// 6  6  6  6  6  6


// let num =6;
// for(let i=1;i<=num;i++){
//     str = "";
//     for(let j=1;j<=i;j++){
//         str = str+i+"  ";
//     }
//     console.log(str);
// }


//********print without going to next line****************** */

// let n=5;
// for(let row=1; row<=n; row++){
//     console.log("*")
// }

// let n=5;
// for(let row=1; row<=n; row++){
//     //console.log("*")
//     process.stdout.write("*");
// }

//********************************************************** */

    // . . . . *
    // . . . * * *
    // . . * * * * *
    // . * * * * * * *
    // * * * * * * * * *

//     let n = 5;
//     let nsp = n-1;
//     let nst = 1;
//     for(let row =1; row<=n ; row++){
//     for(let sp=1; sp<=nsp;sp++){
//         process.stdout.write(" ");
//     }

//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }
//     console.log()
//     nsp = nsp-1;
//     nst= nst+2;
// }


//********************************************************* */

// - - - - *
// - - - *
// - - *
// - *
// *


// let n = 5;
// let nsp = n-1;
// for(let row=1 ; row<=n; row++){
//     for(let sp = 1; sp<=nsp;sp++){
//         process.stdout.write(" ");
//     }
//     process.stdout.write("*");
//     console.log();
//     nsp=nsp-1
// }


//*********************************************************** */


// - - - - *
// - - - * - *
// - - * - - - *
// - * - - - - - *
// * - - - - - - - *



// let n = 5;
// let ssp =n-1;
// let msp = 0;
// for(let row=1;row<=n;row++){
//     for(let sspp=1;sspp<=ssp;sspp++){
//         process.stdout.write(" ");
//     }
//     process.stdout.write("*");

//     for(let mspp=1;mspp<=msp;mspp++){
//         process.stdout.write(" ");
//     }
//     if(row>1){
//         process.stdout.write("*");
//     }
//     ssp=ssp-1;
//     msp=msp+2;
//     console.log();
    
// }


//************************************************************* */



// . . . . *
// . . . * * *
// . . * * * * *
// . . . * * * 
// . . . . *

// let n = 5;
// let nsp = n-1;
// let nst = 1;

// let up =0;

// for(let row = 1; row<=n; row++){
//     // upside the diamond
//     if(up==0){
//         for(let sp = 1; sp<=nsp; sp++){
//             process.stdout.write("-");
//         }

//         for(let st =1; st<= nst; st++){
//             process.stdout.write("*");
//         }
//         console.log()
//         nsp=nsp-1;
//         nst=nst+2;
//     }
//     if(row == 3){
//         up = 1;
//         nsp=nsp+1;
//         nst=nst-2;
//     }
//     // downside of the diamond
//     if(up == 1){
//         nsp=nsp+1;
//         nst=nst-2;
//         for(let sp = 1; sp<=nsp; sp++){
//             process.stdout.write("-");
//         }

//         for(let st =1; st<= nst; st++){
//             process.stdout.write("*");
//         }

//         console.log()

//     }

// }



//**************************************************************** */


// 1
// 12
// 123
// 1234
// 12345

// let n = 5;

// for(let row = 1; row<=n; row++){

//     let str="";


//     for(let st=1; st<=row;st++){
//         // console.log(st)
//         str = str+st;
//     }
//     console.log(str)

// }


//****************************************************************** */



// * - - - *
// - * - *
// - - *
// - * - *
// * - - - *


// let n = 5;

// for(let row = 1; row <=n; row++){
    
//     for(let col=1; col<=n; col++){
//         if(row==col || row+col==n+1){
//             process.stdout.write("*");
//         }
//         else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log()

// }

// let n =5;
//  for(let row =1; row<=n; row++){
//     let str = "";
//     for(let col=1; col<= n; col++){
//         if(row==col || row+col==n+1){
//             str=str+"*";
//         }
//         else{
//             str=str+" ";
//         }
//     }
//     console.log(str)

//  }



//********************************************************************* */



// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * * 
// * *
// *



// let n= 10;
// let nst = 1;
// for(let row =1; row<=n; row++){
//     for(let st=1; st<=nst; st++){
//         process.stdout.write("*");
//     }
//     if(row<5){
//         nst=nst+1;
//     }
//     else{
//         nst=nst-1;
//     }

//     console.log()
// }



//****************************************************************** */


// *     * * * *
// *     *
// *     *
// * * * * * * *
//       *     *
//       *     *
// * * * *     *


// let n=7;

// for(let r=1;r<=n;r++){
//     for(let c=1;c<=n;c++){
//         if(r==1){
//             if(c==1 || c>=4){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write("-");
//             }
//         }
//         else if(r<4){
//             if(c==1 || c==4){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write("-");
//             }
//         }
//         else if(r==4){
//             process.stdout.write("*");
//         }
//         else if(r<n){
//             if(c==4 || c==n){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write("-");
//             }
//         }
//          else if(r==n){
//             if(c<=4 || c==n){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write("-");
//             }
//         }
//         else{
//             process.stdout.write(" ");
//         }


//     }
//     console.log()
// }



//********************************************************************* */



// fibonaci number*************************************************************************************

// let n=50;

// let fn = 0;

// let sn =1;

// for(let num =0; num<=n; num++){
//     console.log(fn)

//     let nn =fn+sn;

//     fn=sn;

//     sn=nn;

// }