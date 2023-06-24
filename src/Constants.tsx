export function fn(
    route: string,
    params?: {
        token?: string
        body?: any
        method?: "POST" | "GET"
        aboba?: boolean
    },
) {
    return fetch(API_URL + route, {
        method: !params?.body ? "GET" : "POST",
        headers: {
            ...(params?.token
                ? { Authorization: "Bearer " + params?.token }
                : {}),
            ...(params?.aboba ? {} : { "Content-Type": "application/json" }),
        },
        body: params?.body
            ? params?.aboba
                ? params?.body
                : JSON.stringify(params?.body)
            : undefined,
    }).then((res) => res.json())
}

export const API_URL = import.meta.env.VITE_API_URL
export const PREDICT = "/predict"
export const EXCEL = "/excel"
