import {createSlice} from "@reduxjs/toolkit"


const landingSlice = createSlice({
  name: "land",
  initialState: {
    landing:true,
    car:false
  },
  reducers:{
    toggleShow: (state,action)=>{
      state["landing"] = !state["landing"]
    },
    toggleCar: (state,action)=>{
      state["car"] = action.payload
    }
  }
})

export const {toggleShow, toggleCar} = landingSlice.actions
export default landingSlice.reducer