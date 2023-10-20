import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { productReducer } from "./reducers/product";
import { orderReducer } from "./reducers/order";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  user: persistedReducer,
  product: productReducer,
  order: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
