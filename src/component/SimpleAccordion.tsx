import { useState } from "react";
import accordionPlus from "../assets/img/svg/plus.svg";
import accordionMinus from "../assets/img/svg/minus.svg";


const SimpleAccordion = ({ title, content }: any) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="">
            <div className="flex gap-4  justify-between pb-4" onClick={() => { setIsOpen(!isOpen) }}>
                <p className="font-semibold">{title}</p>
                {isOpen ? <img src={accordionPlus} alt="" /> : <img src={accordionMinus} alt="" />}
            </div>
            {isOpen ? <div className="flex flex-col gap-2">
                {content.map((item: any, index: any) => <p className="font-light" key={`${item}-${index}`}>{item}</p>)}
            </div> : ""}
        </div>
    )
}

export default SimpleAccordion;