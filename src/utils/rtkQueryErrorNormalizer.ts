import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type NormalizedError = {
  status?: number | string;
  message?: string;
  raw: FetchBaseQueryError | SerializedError;
};

export const normalizeError = (
  error: FetchBaseQueryError | SerializedError | undefined
): NormalizedError | undefined => {
  if (!error) return undefined;

  if ('status' in error) {
    // FetchBaseQueryError
    return {
      status: error.status,
      message:
        typeof error.data === 'string'
          ? error.data
          : ((error.data as any)?.message ?? 'Unknown error'),
      raw: error,
    };
  }

  // SerializedError
  return {
    message: error.message,
    raw: error,
  };
};
