import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

test('renders content', async () => {
    const todo = {
        text: "A test todo item",
        done: false
    }
    const mockDelete = jest.fn()
    const mockComplete = jest.fn()
    render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />)

    const element = screen.getByText('A test todo item')
    expect(element).toBeDefined()

    const user = userEvent.setup()
    const deleteButton = screen.getByText('Delete')
    await user.click(deleteButton)
    expect(mockDelete.mock.calls).toHaveLength(1)
})