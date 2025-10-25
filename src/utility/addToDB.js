const getStoreCard=()=>{
    const storeCardSTR=localStorage.getItem("Installation");
    

    if(storeCardSTR){
        const storeCardData = JSON.parse(storeCardSTR);
        return storeCardData;
    }
    else{
        return [];
    }
}




const addToStoreDB=(id)=>{
   const storeCardData= getStoreCard();

   if(storeCardData.includes(id)){
    alert("This app is already exist")
    return;
   }
   else{
       storeCardData.push(id);
       const data= JSON.stringify(storeCardData);
       localStorage.setItem("Installation", data);
       alert('App install successfully');
   }
}


export {addToStoreDB, getStoreCard};