import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { Github } from "./github.container"

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { initialState, stagedSearchCriteria, data } from '../../mocks/states.mock'

const initState = { githubReducer: initialState }
const mockStore = configureStore()
let store, wrapper

test('loads and displays main page', async () => {
    store = mockStore(initState)
    render(<Provider store={store}><Github /></Provider>)

    expect(screen.getByText('Github Searcher')).toBeVisible()
})

test('fetches data', async () => {
    store = mockStore({ ...initState, githubReducer: { ...initialState, stagedSearchCriteria, data } })
    render(<Provider store={store}><Github /></Provider>)

    await waitFor(() => expect(screen.getByText('jerrythimothy')).toBeVisible())


})