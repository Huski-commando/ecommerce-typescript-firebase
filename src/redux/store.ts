import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice/themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

// type of useDispatch and useSelector
type AppDispatch = typeof store.dispatch;

// type of useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// type of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
