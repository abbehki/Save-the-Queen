import cookie from './cookie';


const Pawnreside=(pawnArr,index)=>{
    let i;
    for(i=0;i<pawnArr.length;i++){
        if(pawnArr[i]==index){
            return {data:true,index:i};
        }else{
            continue;
        }
    }
    return false;
}

module.exports = {
    Pawnreside
};
