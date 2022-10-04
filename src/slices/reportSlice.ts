import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {collection, DocumentData, getDocs} from 'firebase/firestore';
// import {db} from '../firebase';

type Report = {
    statusType: 'progress' | 'done' | 'error';
    vehicleId: string;
    idType: 'VIN' | 'ГРЗ' | 'BODY';
    date: string;
    id: number;
}

type ReportsState = {
    list: Report[];
    loading: boolean;
    error: boolean;
}

const initialState: ReportsState = {
    list: [],
    loading: true,
    error: false,
};


export const fetchReports = createAsyncThunk<Report[], undefined>(
    'reports/fetchReports',
    async () => {
        try {
            const res = await fetch('http://localhost:3001/reports');
            if(!res.ok) {
                throw new Error(`Could not fetch reports!`);
            }
            const data = await res.json();

            return data;
        } catch (error) {
            
        }
    }
)

const reportSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        deleteReport: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(({id}) => id !== action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchReports.pending, (state) => {
            state.loading = true
            state.error = false;
        })
        .addCase(fetchReports.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
        .addCase(fetchReports.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }
});

export default reportSlice.reducer;
export const {deleteReport} = reportSlice.actions;