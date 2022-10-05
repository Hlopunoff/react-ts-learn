import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Console } from 'console';
// import {collection, DocumentData, getDocs} from 'firebase/firestore';
// import {db} from '../firebase';

export type Report = {
    statusType: 'progress' | 'done' | 'error';
    vehicleId: string;
    idType: string;
    date: string;
    id: string;
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
);

export const addNewReport = createAsyncThunk<Report, string>(
    'reports/AddNewReport',
    async (report) => {
        const res = await fetch('http://localhost:3001/reports', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: report
        });
        console.log(JSON.parse(report));

        if(!res.ok) {
            throw new Error(`Could not add new report!`);
        }
        return JSON.parse(report);
    }
);

export const removeReport = createAsyncThunk<number, string>(
    'reports/removeReport',
    async (id) => {
        const res = await fetch(`http://localhost:3001/reports/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!res.ok) {
            throw new Error(`Could not delete report`);
        }
        return +id;
    }
)

const reportSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {},
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
        })
        .addCase(addNewReport.pending, state => {
            state.loading = true;
            state.error = false;
        })
        .addCase(addNewReport.fulfilled, (state, action) => {
            state.list.push(action.payload);
            state.loading = false;
        })
        .addCase(addNewReport.rejected, state => {
            state.loading = false;
            state.error = true;
        })
        .addCase(removeReport.fulfilled, (state, action) => {
            state.list = state.list.filter(({id}) => +id !== action.payload);
        })
    }
});

export default reportSlice.reducer;