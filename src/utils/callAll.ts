export const callAll =
    (...fns: Function[]) =>
    (...args: any) =>
        fns?.forEach(async (fn) => typeof fn === 'function' && fn(...args))
