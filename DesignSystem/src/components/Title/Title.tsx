import React from "react";
import {Confetti7Rows} from "../../elements/Confetti7Rows";
import {SectionHeader, Subheading} from "../../elements/typography";
import styled from "styled-components";
import {device} from "../../helpers/device";

interface TitleProps {
    subheading: string;
    title: string;
}


const ConfettiWrapper = styled.div`
  display: none;

  @media ${device.tabletVertical} {
    position: absolute;
    transform: translate(calc(-100% - 24px), 64px);
    display: block;
  }
`;

export const Title = ({subheading, title}: TitleProps) => (
    <>
        <ConfettiWrapper>
            <Confetti7Rows/>
        </ConfettiWrapper>

        <TitleWrapper>
            <HeaderWrapper>
                <Subheading>{subheading}</Subheading>
                <SectionHeader style={{marginTop: 24}}>{title}</SectionHeader>
            </HeaderWrapper>
        </TitleWrapper>
    </>
);

export default Title;
const TitleWrapper = styled.div`
  padding: 0;
  display: flex;

  @media ${device.tabletVertical} {
    padding: 64px 0px;
  }
`;
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0px;

  @media ${device.tabletVertical} {
    padding: 0;
    display: block;
    max-width: 250px;
    margin: -10px 0px;
  }
`;
