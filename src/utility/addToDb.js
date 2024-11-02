import { toast } from "react-toastify";
const getStoredReadList = () =>{
 
        //read-List
        const storedListStr = localStorage.getItem('read-List');
        if (storedListStr) {
            const storedList = JSON.parse(storedListStr);
            return storedList
        }
        else{
            return []
        }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        //already exists. do not add it
        console.log(id, ' already exists in the read list')
        toast('This book is added to your read list.')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-List', storedListStr);
        toast('This book is added to your read list.')
    }
}

export { addToStoredReadList,getStoredReadList }