
export type Result<T, E = string> = 
    | { success: true; value: T }
    | { success: false; error: E };

export const success = <T, E = string>(value: T): Result<T, E> => ({ success: true, value });
export const error = <T, E = string>(error: E): Result<T, E> => ({ success: false, error });