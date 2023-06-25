import { FunctionComponent } from "react"
import { default as ApexChart } from "react-apexcharts"

interface ChartProps {
    data: any
}

const Chart: FunctionComponent<ChartProps> = (props) => {
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
    )
}

export default Chart
