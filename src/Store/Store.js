import {configureStore} from '@reduxjs/toolkit'
import BsellingSlice from '../Store/BsellingSlice'

const Store = configureStore({
    reducer:({
        BsellItem:BsellingSlice
    })
})

export default Store;