import {combineReducers} from 'redux'
import reducerFile from './reducer_file'
import ActiveReducer from './ActiveReducer'

const rootreducer = combineReducers({
    citations: reducerFile,
    activeReducer: ActiveReducer
})

export default rootreducer