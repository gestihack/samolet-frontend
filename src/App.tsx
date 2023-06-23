import { FunctionComponent } from "react"
import "./App.css"
import Logo from "./components/Logo"
import { Button, DatePicker } from "antd"
import dayjs from "dayjs"
import locale from 'antd/es/date-picker/locale/ru_RU'

const App: FunctionComponent = () => {
    return (
        <div className="wrapper w-screen h-screen flex place-items-center justify-center">
            <div className="min-w-fit min-h-fit max-h-[50%] justify-center place-content-center">
                <Logo/>
                <DatePicker.RangePicker
                    locale={locale}
                    className="my-4"
                    picker="date"
                    separator={null}
                    disabledDate={(d) => d.isBefore(dayjs())}
                    size="middle"
                />
                <Button type="primary"> Сделать прогноз </Button>
            </div>
        </div>
    )
}

export default App
