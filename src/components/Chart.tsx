import { FunctionComponent } from "react"
// import { ResponsiveLine } from "@nivo/line"
import { default as ApexChart } from "react-apexcharts"

interface ChartProps {
    data: any
}

const Chart: FunctionComponent<ChartProps> = (props) => {
    const options = {
        chart: {
            height: 380,
            width: "100%",
            type: "area",
            animations: {
                initialAnimation: {
                    enabled: false,
                },
            },
        },
        series: [
            {
                name: "Series 1",
                data: [
                    
                        [ 1420398000000, 32900 ],
                        [ 1421002800000, 32500 ],
                        [ 1421607600000, 32000 ],
                        [ 1422212400000, 30700 ],
                        [ 1422817200000, 30300 ],
                        [ 1423422000000, 30300 ],
                        [ 1424026800000, 30100 ],
                        [ 1424631600000, 29400 ],
                        [ 1425236400000, 29200 ],
                        [ 1425841200000, 29000 ],
                        [ 1426446000000, 28700 ],
                        [ 1427050800000, 27800 ],
                        [ 1427655600000, 27200 ],
                        [ 1428260400000, 26600 ],
                        [ 1428865200000, 25700 ],
                        [ 1429470000000, 24800 ],
                        [ 1430074800000, 24700 ],
                        [ 1430679600000, 24300 ],
                        [ 1431284400000, 23900 ],
                        [ 1431889200000, 24000 ],
                        [ 1432494000000, 23700 ],
                        [ 1433098800000, 23500 ],
                        [ 1433703600000, 23800 ],
                        [ 1434308400000, 24400 ],
                        [ 1434913200000, 25000 ],
                        [ 1435518000000, 25300 ],
                        [ 1436122800000, 25500 ],
                        [ 1436727600000, 25500 ],
                        [ 1437332400000, 25400 ],
                        [ 1437937200000, 25200 ],
                        [ 1438542000000, 25000 ],
                        [ 1439146800000, 24700 ],
                        [ 1439751600000, 24400 ],
                        [ 1440356400000, 24100 ],
                        [ 1440961200000, 24100 ],
                        [ 1441566000000, 23900 ],
                        [ 1442170800000, 24200 ],
                        [ 1442775600000, 24200 ],
                        [ 1443380400000, 24000 ],
                        [ 1443985200000, 24000 ],
                        [ 1444590000000, 23800 ],
                        [ 1445194800000, 23800 ],
                        [ 1445799600000, 24200 ],
                        [ 1446404400000, 24500 ],
                        [ 1447009200000, 24500 ],
                        [ 1447614000000, 23950 ],
                        [ 1448218800000, 23750 ],
                        [ 1448823600000, 23100 ],
                        [ 1449428400000, 22800 ],
                        [ 1450033200000, 22000 ],
                        [ 1450638000000, 21700 ],
                        [ 1451242800000, 21300 ],
                        [ 1451847600000, 21300 ],
                        [ 1452452400000, 21300 ],
                        [ 1453057200000, 21200 ],
                        [ 1453662000000, 21000 ],
                        [ 1454266800000, 21000 ],
                        [ 1454871600000, 21000 ],
                        [ 1455476400000, 21200 ],
                        [ 1456081200000, 21800 ],
                        [ 1456686000000, 22450 ],
                        [ 1457290800000, 23300 ],
                        [ 1457895600000, 23800 ],
                        [ 1458500400000, 25500 ],
                        [ 1459105200000, 26700 ],
                        [ 1459710000000, 29900 ],
                        [ 1460314800000, 29950 ],
                        [ 1460919600000, 31500 ],
                        [ 1461524400000, 31900 ],
                        [ 1462129200000, 40300 ],
                        [ 1462734000000, 43500 ],
                        [ 1463338800000, 43350 ],
                        [ 1463943600000, 42950 ],
                    ],
                
            },
        ],
        xaxis: {
            type: "datetime",
        },
    } as ApexCharts.ApexOptions
    return (
        <ApexChart
            options={{
                
                chart: {
                    
                    defaultLocale: "ru",
                    stacked: false,
                   
                    zoom: {
                        type: "x",
                        enabled: true,
                        autoScaleYaxis: true,
                    },
                    toolbar: {
                        autoSelected: "zoom",
                    },

                    locales: [
                        {
                            name: "ru",
                            options: {
                                months: [
                                    "Январь",
                                    "Февраль",
                                    "Март",
                                    "Апрель",
                                    "Май",
                                    "Июнь",
                                    "Июль",
                                    "Август",
                                    "Сентябрь",
                                    "Октябрь",
                                    "Ноябрь",
                                    "Декабрь",
                                ],
                                shortMonths: [
                                    "Янв",
                                    "Фев",
                                    "Мар",
                                    "Апр",
                                    "Май",
                                    "Июн",
                                    "Июл",
                                    "Авг",
                                    "Сен",
                                    "Окт",
                                    "Ноя",
                                    "Дек",
                                ],
                                days: [
                                    "Воскресенье",
                                    "Понедельник",
                                    "Вторник",
                                    "Среда",
                                    "Четверг",
                                    "Пятница",
                                    "Суббота",
                                ],
                                shortDays: [
                                    "Вс",
                                    "Пн",
                                    "Вт",
                                    "Ср",
                                    "Чт",
                                    "Пт",
                                    "Сб",
                                ],
                                toolbar: {
                                    exportToSVG: "Download SVG",
                                    exportToPNG: "Download PNG",

                                    selection: "Selection",
                                    selectionZoom: "Selection Zoom",
                                    zoomIn: "Zoom In",
                                    zoomOut: "Zoom Out",
                                    pan: "Panning",
                                    reset: "Reset Zoom",
                                },
                            },
                        },
                    ],
                    type: "area",
                    animations: {
                        enabled: true,
                    },
                
                },
                markers: {
                    size: 0,
                },
                xaxis: {
                    type: "datetime",
                },
            }}
            series={props.data}
        />
        // <ResponsiveLine
        // data={props.data}
        // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        // xScale={{ type: 'point' }}
        // yScale={{
        //     type: 'linear',
        //     min: 'auto',
        //     max: 'auto',
        //     stacked: true,
        //     reverse: false
        // }}
        // yFormat=" >-.2f"
        // axisTop={null}
        // axisRight={null}
        // axisBottom={{
        //     tickSize: 2,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'transportation',
        //     legendOffset: 36,
        //     legendPosition: 'middle'
        // }}
        // axisLeft={{
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'count',
        //     legendOffset: -40,
        //     legendPosition: 'middle'
        // }}
        // pointSize={10}
        // pointColor={{ theme: 'background' }}
        // // colors={{ scheme: 'purple_blue_green' }}
        // pointBorderWidth={2}
        // pointBorderColor={{ from: 'serieColor' }}
        // pointLabelYOffset={-12}
        // useMesh={true}
        // legends={[
        //     {
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: true,
        //         translateX: 100,
        //         translateY: 0,
        //         itemsSpacing: 0,
        //         itemDirection: 'left-to-right',
        //         itemWidth: 80,
        //         itemHeight: 20,
        //         itemOpacity: 0.75,
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemBackground: 'rgba(0, 0, 0, .03)',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        // />
    )
}

export default Chart
