import FooterComponent from "@components/footer";
import HeaderComponent from "@components/header";
import SidebarComponent from "@components/sidebar";

export default function AdminLayout({children}: any): JSX.Element {
  return (
    <div className="main-wrapper main-wrapper-1">
      <HeaderComponent />
      <SidebarComponent />
      { children }
      <FooterComponent />
    </div>
  );
}