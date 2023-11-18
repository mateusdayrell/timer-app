import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLogin } from '../../hooks/useLogin';

export interface IAuthentication {
  isProcessingRequest: boolean;
  user?: object;
  loggedIn: boolean;
}
const initialState: IAuthentication = { isProcessingRequest: false, loggedIn: false };
export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      const { id, name, email } = action?.payload

      return {
        ...state,
        user: { id, name, email },
        isProcessingRequest: false,
        loggedIn: true,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
        loggedIn: false,
      };
    },
  },
});
export const authenticateUser = (userData: any) => async (dispatch: any) => {
  dispatch(start());
  try {
    const result = await useLogin(
      userData.email, userData.password
     );
    
    if(result)
      dispatch(success(result));
    else 
      throw "Error authenticating user";
  } catch (err) {
    dispatch(error(err as any));
  }
};
export const { start, success, error } = authSlice.actions;
// export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authSlice.reducer;
