import { removeTodo, switchTodo, addTodo } from '../api/todos'
import { useMutation } from 'react-query'

export const addMuation = () => useMutation(addTodo)
export const deleteMutation = () => useMutation(removeTodo)
export const switchMutation = () => useMutation(switchTodo)
