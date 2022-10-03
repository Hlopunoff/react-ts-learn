import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {collection, DocumentData, getDocs} from 'firebase/firestore';
import { SingleReport } from '../components/singleReport/SingleReport';
import {db} from '../firebase';

type Report = {
    statusType: 'progress' | 'done' | 'error';
    status: string;
    vehicleId: string;
    idType: 'VIN' | 'ГРЗ' | 'BODY';
}

type ReportsList = {
    list: Report[];
    loading: boolean;
    error: boolean;
}

const initialState: ReportsList = {
    list: [],
    loading: true,
    error: false,
};

export const fetchReports = createAsyncThunk<ReportsList, undefined>(
    'reports/fetchReports',
    async() => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = SingleReport[];

        return querySnapshot;
    }
);

const reportSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchReports.pending, (state) => {state.loading = true})
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