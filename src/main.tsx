import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.scss"
import { ConfigProvider } from "antd"
import locale from 'antd/es/locale/ru_RU'
import dayjs from "dayjs"
import "dayjs/locale/ru"

dayjs.locale("ru")

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider locale={locale}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
)
