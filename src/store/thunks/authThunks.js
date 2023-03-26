import {createAsyncThunk} from '@reduxjs/toolkit'
import {getUser, logIn, registration} from '../../api/authAPI'
import {logOutUser, setUser} from '../slices/authSlice'
import {LS_TOKEN_KEY} from '../../constants/constants'
import {showModal} from '../slices/modalSlice'

export const logInThunk = createAsyncThunk(
	'auth/logIn',
	async ({email, password}, {dispatch}) => {
		const [data, error] = await logIn(email, password)

		if (data?.access_token) {
			dispatch(setUser(data.user))
			localStorage.setItem(LS_TOKEN_KEY, data.access_token)
			return
		}

		dispatch(
			showModal({
				title: 'Login error',
				modalText: error.message,
				type: 'error',
			})
		)
	}
)

export const registerThunk = createAsyncThunk(
	'auth/register',
	async ({email, firstName, lastName, password}, {dispatch}) => {
		const [data, error] = await registration(email, firstName, lastName, password)

		if (data) {
			dispatch(
				showModal({
					title: 'Success!',
					modalText:
						'You have successfully registered! Please log in to your account.',
					type: 'success',
				})
			)

			return true
		}

		dispatch(
			showModal({
				title: 'Registration error',
				modalText: error.message,
				type: 'error',
			})
		)

		return false
	}
)

export const getUserThunk = createAsyncThunk(
	'auth/getUser',
	async (_, {dispatch}) => {
		const [data, error] = await getUser()

		if (error) {
			dispatch(logOutUser())
			throw new Error('Failed to get user data')
		}

		dispatch(setUser(data))
	}
)
