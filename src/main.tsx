import React from "react"
import ReactDOM from "react-dom/client"
import App from "./pages/App.tsx"
import "./index.scss"
import { ConfigProvider } from "antd"
import locale from "antd/es/locale/ru_RU"
import dayjs from "dayjs"
import "dayjs/locale/ru"
import { QueryClient, QueryClientProvider } from "react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Predict from "./pages/Predict.tsx"

const queryClient = new QueryClient();
dayjs.locale("ru")

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App/>
        ),
    },
    {
        path: "/predict/",
        element: <Predict />,
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider locale={locale}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ConfigProvider>
    </React.StrictMode>,
)
