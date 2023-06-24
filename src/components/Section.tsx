import { FunctionComponent, PropsWithChildren } from "react"

interface SectionProps {
    className?: string
}

const Section: FunctionComponent<SectionProps & PropsWithChildren> = (
    props,
) => {
    return (
        <section className={"ui-section bg-white rounded-[20px] flex min-h-[3rem] px-12 py-8"  + (props.className ?? "")}>
            {props.children}
        </section>
    )
}

export default Section
