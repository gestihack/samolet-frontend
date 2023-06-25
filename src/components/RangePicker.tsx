import { DatePicker } from "antd"
import dayjs, { Dayjs } from "dayjs";
import { FunctionComponent, useState } from "react"

interface RangePickerProps {
    error?: boolean
    setError: React.Dispatch<React.SetStateAction<boolean | undefined>>
    setDates: React.Dispatch<React.SetStateAction<[string, string] | undefined>>
    defaults?: [Dayjs, Dayjs]
    className?: string
}

const RangePicker: FunctionComponent<RangePickerProps> = (props) => {
    return (
        <div className={(props.error ? "rangePickerError " : "") + " " + (props.className ?? " ") +
        " flex justify-center rounded-[15px] bg-white"}>
            <div className="m-3 block"> 
                <DatePicker.RangePicker
                    className="w-full"
                    bordered={false}
                    picker="week"   
                    placement="bottomLeft"
                    format={"DD.MM.YYYY"}
                    // status={props.error ? "error" : ""}
                    onChange={() => props.setError(false)}
                    defaultValue={props.defaults}
                    presets={[
                        // { label: "Неделя",        value: [ dayjs("2022-09-05"), dayjs("2022-09-05").add(1, "week")] },
                        // { label: "Две недели",    value: [ dayjs("2022-09-05"), dayjs("2022-09-05").add(2, "week")] },
                        // { label: "Три недели",    value: [ dayjs("2022-09-05"), dayjs("2022-09-05").add(3, "week")] },
                        { label: "Два месяца", value: [ dayjs("2022-09-05"), dayjs("2022-09-05").add(2, "M")] },
                        { label: "Три месяца", value: [ dayjs("2022-09-05"), dayjs("2022-09-05").add(3, "M")] },
                        { label: "Полгода", value: [ dayjs("2022-09-05"), dayjs("2022-09-05").add(6, "M")] },
                    ]}
                    onCalendarChange={(dates) => props.setDates([dates?.[0]?.format("YYYY-MM-DD")!, dates?.[1]?.format("YYYY-MM-DD")!])}
                    defaultPickerValue={[dayjs("2022-09-05"), dayjs("2022-09-05").add(2, "week")]}
                    disabledDate={(d) => d.isAfter(dayjs("2023-03-13", "YYYY-MM-DD")) || d.isBefore(dayjs("2022-09-05", "YYYY-MM-DD"))}
                    size="middle"

                />
            </div>
        </div>
    )
}

export default RangePicker
