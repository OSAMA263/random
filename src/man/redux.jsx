import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk(
  "products/fetchData",
  async (_, thunkAPI) => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
const ProductSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    success: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export default ProductSlice.reducer;

const Redux = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const items = useSelector((state) => state.products.items);
  const handleFetchData = () => {
      dispatch(fetchData());
  };
  return (
    <div>
      <h4>Items:</h4>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      <button disabled={loading} onClick={handleFetchData}>
        Fetch Data
      </button>
    </div>
  );
}
// END OF REDUX------------------