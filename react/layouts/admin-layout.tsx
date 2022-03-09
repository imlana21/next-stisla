import FooterComponent from "@components/footer";
import HeaderComponent from "@components/header";
import SidebarComponent from "@components/sidebar";

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