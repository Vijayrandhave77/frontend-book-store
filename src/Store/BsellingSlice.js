import { createSlice } from "@reduxjs/toolkit"
 
const BsellingSlice = createSlice({
    name:"Token",
    initialState:{
        BsellingItem : [],
        addTocart:[],
        count:0,
        price:0,
        begCount:0,
        update:true
    },
    reducers:{
    ADD:(state,action)=>{
        state.BsellingItem = [action.payload]

    },
    fc1:(state,action)=>{
        state.BsellingItem = [action.payload]
    },
    fc2:(state,action)=>{
        state.BsellingItem = [action.payload]
    },
    fc3:(state,action)=>{
        state.BsellingItem = [action.payload]
    },

    AddToCart:(state,action)=>{
        let imgf =action.payload
        
        let ard = state.addTocart.find((data)=>data.img === imgf[0].img)
        if(ard){ 
            state.count++
        }else{
            // state.addTocart = [...state.addTocart,...action.payload]
            state.addTocart.push(...action.payload)
            localStorage.setItem("addToCart",JSON.stringify(state.addTocart))

         state.begCount++  
           



        }
    },
    remove:(state,action)=>{

 
            let data = localStorage.getItem("addToCart")
            const finalLocalData = JSON.parse(data)
    
            let rem = finalLocalData.filter((item)=>item.img !== action.payload.img)
            localStorage.setItem("addToCart",JSON.stringify(rem))
            state.update=rem
        // state.addTocart = state.addTocart.filter((item) => item.img !== action.payload.img)
    }
}
})

export const {ADD,fc1,fc2,fc3,AddToCart,remove} = BsellingSlice.actions
export default BsellingSlice.reducer