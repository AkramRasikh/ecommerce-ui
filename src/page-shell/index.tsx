import React from "react";
import { Header, Navbar, Banner, Title } from "../components";
import PageShellContainer from "./page-shell-container";
import PageShellSection from "./page-shell-section";

interface BannerText {
  message: string;
  code: string;
}

export interface NavItemData {
  name: string;
  color?: string;
}

interface PageShellProps {
  children: React.ReactNode;
  tabs: NavItemData[];
  bannerTexts: BannerText;
  title: string;
  errorMsg?: string;
  withPadding?: boolean;
}

const PageShell = ({
  title,
  tabs,
  bannerTexts,
  withPadding = false,
  errorMsg,
  children,
}: PageShellProps) => (
  <PageShellContainer withPadding={withPadding}>
    <Header />
    <Navbar navItems={tabs} />
    <Banner bannerTexts={bannerTexts} />
    <PageShellSection>
      <Title>{title}</Title>
      {errorMsg && <p>{errorMsg}</p>}
      {children}
    </PageShellSection>
  </PageShellContainer>
);

export default PageShell;
