import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";
import { chuckReducer } from "./Chuck/reducer";
import { middleware } from "../Middleware";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    chuck: chuckReducer,
  }),
  composeEnhancers(applyMiddleware(middleware, thunk))
);
