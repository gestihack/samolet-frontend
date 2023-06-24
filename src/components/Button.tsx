import { FunctionComponent, PropsWithChildren } from "react"

interface ButtonProps {
    icon: string
    type: "primary" | "secondary"
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    className?: string
}

const Button: FunctionComponent<ButtonProps & PropsWithChildren> = (props) => {
    return (
        <button
            btn-type={props.type}
            onClick={props.onClick}
            className={
                (props.type === "primary"
                    ? "bg-blue"
                    : "bg-[#EEEEEE] text-grey") +
                "  w-full h-full flex flex-row rounded-[15px] justify-center py-4 px-2 text-gray-light text-lg"
                + " " + (props.className ?? "")
            }>
            <span className="">{props.children}</span>
            <span className="pl-auto">
                <img
                    className="w-8 h-7 flex"
                    src={props.icon}
                />
            </span>
        </button>
    )
}

export default Button
