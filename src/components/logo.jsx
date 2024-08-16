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
            <Link to="/" preventScrollReset={false} className="w-full text-lg font-bold tracking-tight  me-5 flex justify-center items-center ">
                <LogoBox>
                    <IoPaw className="me-[0.1rem] -rotate-[35deg]" />
                    <span>Kongwarit Utapao</span>

                </LogoBox>
            </Link>
        )
    );
}