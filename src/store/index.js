import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import authReducer from './AuthSlice';
import MysqlSlice from './MysqlSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authR : authReducer,
    mysqlSl: MysqlSlice,

  },
})
