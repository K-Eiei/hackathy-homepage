import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { IoPaw } from "react-icons/io5";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;

> svg {
  transition: 200ms ease;
}

&:hover > svg {
  transform: rotate(0deg);
}
`

export default function Logo() {
    return (
        (
            <Link to="/" preventScrollReset={false} className="w-full font-bold tracking-tight flex justify-center items-center outline-none pt-[1px] ">
                <LogoBox>
                    <IoPaw className="me-[0.1rem] -rotate-[35deg]" />
                    <span className="tracking-tighter">Kongwarit Utapao</span>

                </LogoBox>
            </Link>
        )
    );
}