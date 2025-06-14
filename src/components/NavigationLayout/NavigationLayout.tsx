import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;
import { navigationItems } from "@/utils/constants/navigationItems.constant";
import styles from "./NavigationLayout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import UserButton from "./UserButton/UserButton";
import { useBreadcrumbItems } from "@/hooks/useBreadcrumItems";

const NavigationLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const items = useBreadcrumbItems();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.headerLeftItem}>
          <Link to="/home" className={styles.headerLogo}>
            <img src="/img/logo-banner.png" alt="" width={180} />
          </Link>

          <Breadcrumb items={items} className={styles.breadcrumb} />
        </div>

        <div className={styles.headerLeftRight}>
          <UserButton />
        </div>
      </Header>
      <Layout>
        <Sider width={250} className={styles.sidebar}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={navigationItems}
            className="custom-menu"
            onClick={(e) => {
              if (e.key === "/logout") {
                handleLogout();
              } else {
                navigate(e.key);
              }
            }}
          />
          <div className={styles.sidebarFooter}>
            <span className={styles.developmentInfo}>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/andresvpineros/"
                target="_blank"
                style={{ color: "#068fff" }}
              >
                @Brandon Vargas
              </a>
            </span>
          </div>
        </Sider>
        <Layout className={styles.contentLayout}>
          <Content
            className={styles.contentContainer}
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default NavigationLayout;
