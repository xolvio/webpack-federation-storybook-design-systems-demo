import React from "react";
import styled from "styled-components";
import {
    SectionHeader,
    SectionHeaderSmall,
    Subheading,
    TextBody,
} from "./typography";
import {Confetti7Rows} from "./Confetti7Rows";
import {device} from "./device";
import {spacing} from "./spacing";
import {ButtonInlineLink} from "./InlineButton";
import {CenteredContentWrapper} from "./CenteredContentWrapper";

export type SectionProps = {
    heading: string;
    description: string;
    icon: React.ReactNode;
    url?: string;
    onClick?: () => void;
    sectionId?: string;
};

type ServicesProps = {
    title: string;
    id?: string;
    subheading: string;
    sections: SectionProps[];
    style?: React.CSSProperties;
};

export const Services = (props: ServicesProps) => (
    <CenteredContentWrapper id={props.id}>
        <Wrapper style={props.style}>
            <Background/>
            <ConfettiWrapper>
                <Confetti7Rows/>
            </ConfettiWrapper>

            <TitleWrapper>
                <HeaderWrapper>
                    <Subheading>{props.subheading}</Subheading>
                    <SectionHeader style={{marginTop: 24}}>{props.title}</SectionHeader>
                </HeaderWrapper>
            </TitleWrapper>

            <SectionsWrapper>
                {props.sections.map((section) => (
                    <ServiceSection {...section} key={section.heading}/>
                ))}
            </SectionsWrapper>
        </Wrapper>
    </CenteredContentWrapper>
);

const ServiceSection = (props: SectionProps) => (
    <ServiceSectionWrapper>
        <Anchor id={props.sectionId}/>
        <IconWrapper>{props.icon}</IconWrapper>

        <ServiceContentWrapper>
            <SectionHeaderSmall>{props.heading}</SectionHeaderSmall>
            <TextBody>{props.description}</TextBody>

            {props.url && (
                <ButtonInlineLink
                    onClick={props.onClick}
                    href={props.onClick ? undefined : props.url}
                    style={{paddingTop: 20}}
                    as={"a"}
                >
                    Learn more
                </ButtonInlineLink>
            )}
        </ServiceContentWrapper>
    </ServiceSectionWrapper>
);

const Wrapper = styled.div`
  position: relative;
  @media ${device.tabletVertical} {
    display: flex;
    padding: 0 0 250px 0;

    * {
      text-align: left;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  right: 50%;
  width: 100%;
  background: #f4f7f6;
  z-index: -1;

  @media ${device.tabletVertical} {
    right: calc(100% - ${spacing.desktop.maxContentWidth}px / 2 + 395px);
    width: 100vw;
  }
`;

const ConfettiWrapper = styled.div`
  display: none;

  @media ${device.tabletVertical} {
    position: absolute;
    transform: translate(calc(-100% - 24px), 64px);
    display: block;
  }
`;

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

const SectionsWrapper = styled.div`
  flex-grow: 1;

  @media ${device.tabletVertical} {
    margin-left: 50px;
  }
`;

const ServiceSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tabletVertical} {
    flex-direction: row;

    :not(:last-child) {
      border-bottom: 1px solid #eaebea;
      margin-bottom: 50px;
    }
  }
`;
const IconWrapper = styled.div`
  @media ${device.tabletVertical} {
    position: relative;
    top: -35px;
    width: 100px;
    height: 100%;
    display: block;
  }
`;

const ServiceContentWrapper = styled.div`
  text-align: center;

  @media ${device.tabletVertical} {
    margin-left: 95px;
    margin-bottom: 60px;
    text-align: left;
  }
`;

const Anchor = styled.a`
  position: relative;
  top: -90px;
  @media ${device.tablet} {
    position: absolute;
    top: 0;
  }
`;
