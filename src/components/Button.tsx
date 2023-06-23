import { FunctionComponent, PropsWithChildren } from "react"

interface ButtonProps {
    icon: string
    type: "primary" | "secondary"
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FunctionComponent<ButtonProps & PropsWithChildren> = (props) => {
    return (
        <button onClick={props.onClick} className={ (props.type === "primary" ? "bg-blue" : "bg-gray-dark") +
            " w-full h-full flex flex-row rounded-[15px] justify-center py-4 px-2 text-gray-light text-lg"}>
            <span>
                {props.children}
            </span>
            <span className="relative left-16">
                <img className="w-8 h-7 flex" src={props.icon} />
            </span>
            
        </button>
    )
}

export default Button
