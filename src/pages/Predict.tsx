const data = [
    {
        id: "aboba",
        color: "hsl(211, 100%, 49%)",
        data: [
            { x: "05.01.2015", y: 32900 },
            { x: "12.01.2015", y: 32500 },
            { x: "19.01.2015", y: 32000 },
            { x: "26.01.2015", y: 30700 },
            { x: "02.02.2015", y: 30300 },
            { x: "09.02.2015", y: 30300 },
            { x: "16.02.2015", y: 30100 },
            { x: "23.02.2015", y: 29400 },
            { x: "02.03.2015", y: 29200 },
            { x: "09.03.2015", y: 29000 },
            { x: "16.03.2015", y: 28700 },
            { x: "23.03.2015", y: 27800 },
            { x: "30.03.2015", y: 27200 },
            { x: "06.04.2015", y: 26600 },
            { x: "13.04.2015", y: 25700 },
            { x: "20.04.2015", y: 24800 },
            { x: "27.04.2015", y: 24700 },
            { x: "04.05.2015", y: 24300 },
            { x: "11.05.2015", y: 23900 },
            { x: "18.05.2015", y: 24000 },
            { x: "25.05.2015", y: 23700 },
            { x: "01.06.2015", y: 23500 },
            { x: "08.06.2015", y: 23800 },
            { x: "15.06.2015", y: 24400 },
            { x: "22.06.2015", y: 25000 },
            { x: "29.06.2015", y: 25300 },
            { x: "06.07.2015", y: 25500 },
            { x: "13.07.2015", y: 25500 },
            { x: "20.07.2015", y: 25400 },
            { x: "27.07.2015", y: 25200 },
            { x: "03.08.2015", y: 25000 },
            { x: "10.08.2015", y: 24700 },
            { x: "17.08.2015", y: 24400 },
            { x: "24.08.2015", y: 24100 },
            { x: "31.08.2015", y: 24100 },
            { x: "07.09.2015", y: 23900 },
            { x: "14.09.2015", y: 24200 },
            { x: "21.09.2015", y: 24200 },
            { x: "28.09.2015", y: 24000 },
            { x: "05.10.2015", y: 24000 },
            { x: "12.10.2015", y: 23800 },
            { x: "19.10.2015", y: 23800 },
            { x: "26.10.2015", y: 24200 },
            { x: "02.11.2015", y: 24500 },
            { x: "09.11.2015", y: 24500 },
            { x: "16.11.2015", y: 23950 },
            { x: "23.11.2015", y: 23750 },
            { x: "30.11.2015", y: 23100 },
            { x: "07.12.2015", y: 22800 },
            { x: "14.12.2015", y: 22000 },
            { x: "21.12.2015", y: 21700 },
            { x: "28.12.2015", y: 21300 },
            { x: "04.01.2016", y: 21300 },
            { x: "11.01.2016", y: 21300 },
            { x: "18.01.2016", y: 21200 },
            { x: "25.01.2016", y: 21000 },
            { x: "01.02.2016", y: 21000 },
            { x: "08.02.2016", y: 21000 },
            { x: "15.02.2016", y: 21200 },
            { x: "22.02.2016", y: 21800 },
            { x: "29.02.2016", y: 22450 },
            { x: "07.03.2016", y: 23300 },
            { x: "14.03.2016", y: 23800 },
            { x: "21.03.2016", y: 25500 },
            { x: "28.03.2016", y: 26700 },
            { x: "04.04.2016", y: 29900 },
            { x: "11.04.2016", y: 29950 },
            { x: "18.04.2016", y: 31500 },
            { x: "25.04.2016", y: 31900 },
            { x: "02.05.2016", y: 40300 },
            { x: "09.05.2016", y: 43500 },
            { x: "16.05.2016", y: 43350 },
            { x: "23.05.2016", y: 42950 },
        ],
    },
]

type PredictTable = {
    date: number
    quantity: number
    price: number
    preds: number
}
type PredictChart = {
    name: string
    data: [string | number, number][]
}

import { FunctionComponent, useEffect, useState } from "react"
import Logo from "../components/Logo"
import { /*Button,*/ Skeleton } from "antd"
import Button from "../components/Button"
import dayjs from "dayjs"
import arrow from "../assets/narrow.svg"
import Section from "../components/Section"
import { useSearchParams } from "react-router-dom"
import RangePicker from "../components/RangePicker"
import download from "../assets/download.svg"
import { DotChartOutlined, TableOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"
import Chart from "../components/Chart"
import { useQuery } from "react-query"
import { API_URL, EXCEL, PREDICT, fn } from "../Constants"
import { useNavigate } from "react-router-dom"

const Predict: FunctionComponent = () => {
    let noDate = false

    // const chartQuery = useQuery({
    //     enabled: true,
    //     refetchInterval: false,
    //     refetchOnWindowFocus: false,
    //     queryKey: ["chart"],
    //     cacheTime: 1_000_000,
    //     queryFn: () => fn(CHART),
    // })
    // let chartIsFetching = chartQuery.isFetching
    // let chartData = chartQuery.data
    // if (chartQuery.isFetched) console.log(chartData)

    // const tableQuery = useQuery({
    //     enabled: true,
    //     refetchInterval: false,
    //     refetchOnWindowFocus: false,
    //     queryKey: ["table"],
    //     cacheTime: 1_000_000,
    //     queryFn: () => fn(TABLE),
    // })
    // let tableIsFetching = tableQuery.isFetching
    // let tableData: PredictTable[] = tableQuery.data

    let [searchParams, setSearchParams] = useSearchParams()
    let startDate = searchParams.get("start")
        ? dayjs(searchParams.get("start"))
        : null
    let endDate = searchParams.get("end")
        ? dayjs(searchParams.get("end"))
        : null

    const { isFetching, data, refetch } = useQuery({
        enabled: true,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        queryKey: ["predict"],
        cacheTime: 1_000_000,
        queryFn: () =>
            fn(PREDICT, {
                method: "POST",
                body: {
                    start: startDate?.format("YYYY-MM-DD"),
                    end: endDate?.format("YYYY-MM-DD"),
                },
            }),
    })

    const queryData:
        | {
              table: PredictTable[]
              chart: PredictChart
          }
        | undefined = data

    const tableData: PredictTable[] = data

    if (!startDate?.isValid() || !endDate?.isValid()) {
        noDate = true
    }

    const [error, setError] = useState<boolean>()
    const [dates, setDates] = useState<[string, string]>()

    // console.log(dayjs(data[0].data[0].x, "YYYY-MM-DD"))

    // data[0].data = data[0].data.map((el) => {
    //     let dat = dayjs(el.x, "DD.MM.YYYY").valueOf()//.format("DD.MM.YYYY")
    //     console.log(dat)
    //     return { x: dat, y: el.y }
    // })

    // console.log(JSON.stringify(data[0].data))
    function predict() {
        setSearchParams({
            start: dates?.[0] ?? startDate?.format("YYYY-MM-DD")!,
            end: dates?.[1] ?? endDate?.format("YYYY-MM-DD")!,
        })
        refetch()
    }
    console.log({
        start: dates?.[0] ?? startDate?.format("MM-DD-YYYY")!,
        end: dates?.[1] ?? endDate?.format("MM-DD-YYYY")!,
    })
    // function downloadData() {
    //     navigate()
    // }

    if (!startDate || !endDate) noDate = true

    return (
        <div className="wrapper w-screen h-full flex place-items-start py-8 justify-center">
            <div className="container md:max-w-[1357px] xl:px-52 lg:px-24 md:px-16 px-4 gap-y-3 flex flex-col">
                <Section className=" flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <div className="flex flex-col font-medium">
                        <span className="text-gray-dark">
                            Добрый день! Сегодня:
                        </span>
                        <span>{dayjs().format("DD.MM.YYYY")} 👋</span>
                    </div>
                    <div>
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                    </div>
                    <div className="flex flex-col font-medium text-right">
                        {!noDate ? (
                            <>
                                <span className="text-gray-dark">
                                    Прогноз на
                                </span>
                                <span>
                                    {startDate?.format("DD MMMM YYYY")} -{" "}
                                    {endDate?.format("DD MMMM YYYY")}
                                </span>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </Section>
                <Section className=" flex sm:flex-row flex-col w-full mx-4 gap-y-4 sm:gap-y-0 self-center xl:gap-x-16 lg:gap-x-8 gap-x-4 sm:!px-0 !py-1 justify-between items-center !bg-[transparent] !shadow-none">
                    <div className=" w-full">
                        <RangePicker
                            {...{
                                error,
                                setDates,
                                setError,
                                defaults:
                                    startDate && endDate
                                        ? [startDate, endDate]
                                        : undefined,
                            }}
                        />
                    </div>
                    <div className=" w-full">
                        <Button
                            icon={arrow}
                            type="primary"
                            onClick={() => predict()}>
                            Сделать прогноз
                        </Button>
                    </div>
                    <div className=" w-full">
                        <a href={API_URL + EXCEL}>

                        <Button
                            icon={download}
                            type="secondary"
                            >
                            Скачать прогноз
                        </Button>
                        </a>
                    </div>
                </Section>
                {!noDate ? (
                    <Section className="flex flex-col py-8">
                        <span className="text-2xl font-medium">
                            Результат по стоимости 💰
                        </span>
                        <div className="h-fit py-4 rounded-xl">
                            {isFetching ? (
                                <Skeleton.Node
                                    className=" !w-full !h-64 xl:!h-[800px]"
                                    active={isFetching}>
                                    <DotChartOutlined
                                        style={{
                                            fontSize: 40,
                                            color: "#bfbfbf",
                                        }}
                                    />
                                </Skeleton.Node>
                            ) : (
                                <div className="h-full w-full">
                                    <Chart
                                        data={[
                                            {
                                                name: "Предсказанная цена",
                                                data: tableData?.filter((el) =>
                                                    dayjs(el.date).isBefore(
                                                        endDate,
                                                    ),
                                                ).map((el) => [
                                                    el.date,
                                                    el.preds.toFixed(0),
                                                ]),
                                                color: "#f69400",
                                            },
                                            {
                                                name: "Цена на арматуру",
                                                data: tableData?.filter((el) =>
                                                    dayjs(el.date).isBefore(
                                                        endDate,
                                                    ),
                                                ).map((el) => [
                                                    el.date,
                                                    el.price,
                                                ]),
                                                color: "#007BFB"
                                            },
                                        ]}
                                    />
                                </div>
                            )}
                        </div>
                    </Section>
                ) : (
                    <></>
                )}
                {!noDate ? (
                    <Section className="flex flex-col py-8">
                        <span className="text-2xl font-medium">
                            Рекомендации по закупке 📊
                        </span>
                        <div className="py-4 rounded-xl">
                            {isFetching ? (
                                <Skeleton.Node
                                    className=" !w-full !h-64"
                                    active={isFetching}>
                                    <TableOutlined
                                        style={{
                                            fontSize: 40,
                                            color: "#bfbfbf",
                                        }}
                                    />
                                </Skeleton.Node>
                            ) : (
                                <div className=" overflow-scroll h-fit w-full flex flex-1">
                                    <table
                                        cellSpacing="0"
                                        className="w-full h-full font-medium text-left ">
                                        <thead>
                                            <tr>
                                                <th>Дата</th>
                                                <th>Объем закупки</th>
                                                <th>
                                                    Цена на арматуру
                                                </th>
                                                <th>
                                                    Предсказанная цена
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="h-fit">
                                            {tableData
                                                ?.filter((el) =>
                                                    dayjs(el.date).isBefore(
                                                        endDate,
                                                    ),
                                                )
                                                .map((el, i) => (
                                                    <tr
                                                        className="tr"
                                                        key={i}>
                                                        <td className="td">
                                                            {dayjs(
                                                                el.date,
                                                            ).format(
                                                                "DD.MM.YYYY",
                                                            )}
                                                        </td>
                                                        <td className="td">
                                                            {el.quantity}
                                                        </td>
                                                        <td className="td">
                                                            {el.price}
                                                        </td>
                                                        <td className="td">
                                                            {Math.round(el.preds)}
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </Section>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Predict
