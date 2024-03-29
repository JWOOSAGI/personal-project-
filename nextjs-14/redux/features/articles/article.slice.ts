import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from './article.service';
import { initialState } from '../counter/counter.init';


const articleThunks = [getAllArticles]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected:'rejected'
}


const handlePending = (state : any) => {

}
const handlefulfilled = (state : any) => {
    
}
const handlerejected = (state : any) => {
    
}
    


export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(getAllArticles.fulfilled, (state, {payload}: any) => {
            console.log('---------- conclusion ----------')
            console.log(JSON.stringify(payload))
        })

    }
})

export const {} = articleSlice.actions

export default articleSlice.reducer;