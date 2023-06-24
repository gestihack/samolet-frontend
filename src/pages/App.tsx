import { FunctionComponent, useState } from "react"
import Logo from "../components/Logo"
import Button from "../components/Button"
import arrow from "../assets/narrow.svg"
import { useNavigate } from "react-router-dom"
import RangePicker from "../components/RangePicker"

const App: FunctionComponent = () => {
    const navigate = useNavigate()
    const [dates, setDates] = useState<[string, string]>()
    const [error, setError] = useState<boolean | undefined>(false)

    function predictRedir() {
        if (!dates?.[0] || !dates?.[1]) {
            setError(true)
            return
        }
        const path = `/predict?start=${dates?.[0]}&end=${dates?.[1]}`
        navigate(path)
    }

    return (
        <div className="wrapper w-screen h-screen flex place-items-center justify-center">
            <div className="min-w-fit min-h-fit max-h-[50%] pb-4 justify-center place-content-center ">
                <Logo />
                <div className="mt-4">
                    <span className="text-left text-gray-dark text-sm">
                        Выберите дату
                    </span>
                    {/* <div className="w-full flex justify-center rounded-[15px] bg-white mt-2">
                        <div className="m-3 block">
                            <DatePicker.RangePicker
                                className="w-full border-none"
                                picker="date"
                                placement="bottomLeft"
                                status={error ? "error" : ""}
                                onChange={() => setError(false)}
                                onCalendarChange={(dates, formatted) => setDates(formatted)}
                                // separator={null}
                                disabledDate={(d) => d.isBefore(dayjs())}
                                size="middle"
                            />
                        </div>
                    </div> */}
                    <RangePicker
                        error={error}
                        setError={setError}
                        setDates={setDates}
                    />
                </div>
                <br />
                <Button
                    icon={arrow}
                    type="primary"
                    onClick={() => predictRedir()}>
                    Сделать прогноз
                </Button>
            </div>
        </div>
    )
}

export default App
