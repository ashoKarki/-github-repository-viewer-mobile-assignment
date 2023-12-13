import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../../services/axiosFactory/axiosInstance';
import {GitHubRepository, CustomError} from '../../../../types/response';
import log from '../../../utils/logger';

export const fetchUserRepositories = createAsyncThunk<
  GitHubRepository,
  any,
  {rejectValue: CustomError}
>('fetchUserRepositories', async (payload, thunkAPI) => {
  console.log('check the payload =>', payload);

  try {
    const response = await axiosInstance.get(`${payload}/repos`);
    return response.data as GitHubRepository;
  } catch (error) {
    if (axiosInstance.isAxiosError(error)) {
      const customError: CustomError = error as CustomError;
      return thunkAPI.rejectWithValue(customError);
    } else {
      return thunkAPI.rejectWithValue({
        message: 'An error occurred',
      } as CustomError);
    }
  }
});

const initialState: {
  githubRepository: GitHubRepository;
  errorMessage: string;
  loading: boolean;
} = {
  githubRepository: {
    githubRepository: [],
  },
  errorMessage: '',
  loading: false,
};

const githubRepository = createSlice({
  name: 'fetchUserRepositories',
  initialState,
  reducers: {
    resetGithub: state => {
      state.githubRepository = {
        githubRepository: [],
      };
      state.errorMessage = '';
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserRepositories.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUserRepositories.fulfilled, (state, action) => {
      state.githubRepository = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserRepositories.rejected, state => {
      state.loading = false;
    });
  },
});

export default githubRepository.reducer;
export const {resetGithub} = githubRepository.actions;
export const selectGithubRepository = (state: {
  usersRepoState: GitHubRepository;
}) => state.usersRepoState;
