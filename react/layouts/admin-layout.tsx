import FooterComponent from "@components/footer/footer";
import HeaderComponent from "@components/header/header";
import SidebarComponent from "@components/sidebar/sidebar";

export default function AdminLayout({children}: any): JSX.Element {
  return (
    <div>
      <HeaderComponent />
      <SidebarComponent />
      { children }
      <FooterComponent />
    </div>
  );
}