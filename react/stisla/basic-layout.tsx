import FooterComponent from "./component/footer";
import HeaderComponent from "./component/header";
import SidebarComponent from "./component/sidebar";

export default function BasicLayout({children}: any): JSX.Element {
  return (
    <div className="main-wrapper main-wrapper-1">
      <HeaderComponent />
      <SidebarComponent />
      { children }
      <FooterComponent />
    </div>
  );
}