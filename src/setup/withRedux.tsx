import React from 'react'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import rootStore from './rootStore'

export function withRedux (element: ReactElement) {
  const { store } = rootStore()

  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
}