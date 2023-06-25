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
import { Skeleton } from "antd"
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

const Predict: FunctionComponent = () => {
    let noDate = false

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
            <div className="container md:max-w-[1357px] xl:px-52 lg:px-24 md:px-16 sm:px-4 gap-y-3 flex flex-col">
                <Section className=" flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <div className="flex flex-col font-medium text-center sm:text-left">
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
                    <div className="flex flex-col font-medium text-center sm:text-right">
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
                <Section className=" flex sm:flex-row flex-col w-full sm:mx-4 gap-y-4 sm:gap-y-0 self-center xl:gap-x-16 lg:gap-x-8 gap-x-4 !px-0 !py-1 justify-between items-center !bg-[transparent] !shadow-none">
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
