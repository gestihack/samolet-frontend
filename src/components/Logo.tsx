import { FunctionComponent } from "react";
import { ReactComponent as GestiLogo } from "../assets/gesti.tech.svg";
import SmltLogo from "../assets/smlt_logo_blue_ru.png";

const Logo: FunctionComponent = () => {
    return (
        <div className="w-fit h-fit">
            <div className="flex flex-col gap-y-0.5 mt-4">
                <div className="logos justify-center flex flex-row items-center gap-x-4 pt-2 h-14">
                    <img src={SmltLogo} className="h-5" />
                    <span className="inline bg-black w-px h-5 "></span>
                    <GestiLogo className="h-8"/>
                </div>
                <span className="text-center font-secondary -mt-2 text-gray-dark">
                    Платформа прогноза
                </span>
            </div>
        </div>
    );
};

export default Logo;
