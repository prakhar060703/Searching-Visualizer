
async function binarySearch(){
    const ele = document.querySelectorAll(".bar");
    console.log(vari);
    let userinput=vari;let flag=-1;

    for(let i=0;i<ele.length; i++){
        console.log(parseInt(ele[i].style.height));
       if( parseInt(ele[i].style.height)/2 == userinput){
         flag=i;
         break;
       }
    }
    console.log(flag);
    if(flag!=-1){
        let l=0,r=ele.length-1;
        let mid=parseInt((l+r)/2);
        while(l<=r){
            console.log(mid);
            ele[mid].style.background = 'red';
            await waitforme(delay+100);
           if(parseInt(ele[mid].style.height)/2<userinput){
            l=mid+1;
           } 
           else if( parseInt(ele[mid].style.height)/2 == userinput){
                 ele[mid].style.background = 'white';
                 await waitforme(delay+1200);
                    ele[mid].style.background = '#2ff07f';
                   
                break;
           }
           else{
            r=mid-1;
           }
           ele[mid].style.background = '#2ff07f';
          mid = parseInt((l+r)/2);
          
        }
    }
    else{
        document.querySelector('#baba').innerHTML=`-> ${userinput} is not present in array Now clear me!!  Try Again!!`;
        
    }   

}
 const saraja=(event)=>{
    document.querySelector('#user_input').value="";
    document.querySelector('#baba').innerHTML="";

 }

const binarySearchbtn = document.querySelector(".binarySearch");
binarySearchbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableclear();
    disableSearchingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await binarySearch();
    enableSearchingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableclear();
});