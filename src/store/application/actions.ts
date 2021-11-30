import { createAction } from '@reduxjs/toolkit';
import BigNumber from 'bignumber.js';

export const updateBNBBalance = createAction<{ bnbBalance: BigNumber.Instance }>('application/updateBNBBalance');
export const updateTokenBalance = createAction<{ address: string; balance: BigNumber.Instance | null | undefined }>(
  'application/updateTokenBalance'
);
