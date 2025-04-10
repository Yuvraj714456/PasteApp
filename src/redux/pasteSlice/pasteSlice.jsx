import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState ={
    pastes:localStorage.getItem("pastes")?
    JSON.parse(localStorage.getItem("pastes")):
    []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes',JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully");
    },
    updateToPaste: (state,action) => {
      const  paste =action.payload;
      const index =state.pastes.findIndex((item)=>
        item.id===paste.id)
       if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success("Paste updated");
       } 
    },
    resetAllPaste: (state) => {
      state=[];
      localStorage.removeItem('pastes');
      toast.success("All paste have reset")
    },
    removeFromPaste: (state,action) =>{
        const pasteId =  action.payload;

        console.log('pasteId');
        const index= state.pastes.findIndex((item)=>item._id === pasteId);

        if(index>=0){
          state.pastes.splice(index,1);
          localStorage.setItem('pastes',JSON.stringify(state.pastes));
          toast.success("Paste deleted");
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPaste, resetAllPaste,removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer