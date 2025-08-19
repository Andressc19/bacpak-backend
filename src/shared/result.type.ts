
export type Result<T, E = string> = 
    | { success: true; data: T }
    | { success: false; error: E };

export const success = <T, E = string>(data: T): Result<T, E> => ({ success: true, data });
export const error = <T, E = string>(error: E): Result<T, E> => ({ success: false, error });