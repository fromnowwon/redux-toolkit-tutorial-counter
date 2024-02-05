import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// 비동기 action creator
export const asyncUserFetch = createAsyncThunk(
  'userSlice/asyncUserFetch',
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    return data
  }
)

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userList: [],
    status: null, // status 초기값
  },
  extraReducers: (builder) => {
    // 비동기 작업은 action creator를 자동으로 만들지 않기 때문에 extraReducers를 사용해서 action을 생성해야 한다.
    builder.addCase(asyncUserFetch.pending, (state) => {
      state.status = 'Loading';
    })
    builder.addCase(asyncUserFetch.fulfilled, (state, action) => {
      state.status = 'complete';
      state.userList = action.payload;
    })
    builder.addCase(asyncUserFetch.rejected, (state) => {
      state.status = 'fail';
    })
  },
})

export default userSlice;