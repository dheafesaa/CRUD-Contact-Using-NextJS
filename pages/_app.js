import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../store/reducer";

import '../styles/globals.scss'
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <Header />
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
