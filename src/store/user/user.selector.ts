import { UserState } from './user.reducer';
import { RootState } from '../store';

export const selectUser = (state: RootState): UserState => state.user;
