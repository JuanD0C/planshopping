import {createSlice} from "@reduxjs/toolkit"


const landingSlice = createSlice({
  name: "land",
  initialState: [false],
  reducers:{
    toggleShow: (state,action)=>{
      state[0] = !state[0]
    }
  }
})

export const {toggleShow} = landingSlice.actions
export default landingSlice.reducer