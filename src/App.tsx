import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Typography } from "antd";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import About from "./pages/About";
import DestinationList from "./pages/DestinationList";
import { capitalize, formatRoute } from "./utils";
import mockDestinations from "./mocks/mockData/mockDestinations";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/lib/breadcrumb/Breadcrumb";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: "1",
    label: <Link to="/">Accueil</Link>,
  },
  {
    key: "2",
    label: <Link to="/destinations">Destinations</Link>,
  },
  {
    key: "3",
    label: <Link to="/about">À propos</Link>,
  },
];

type Location<Params extends { [K in string]?: string }> = {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
  params?: Params;
};

const breadcrumbItemsGenerate = (location: Location<any>) => {
  const splittedPathname = location.pathname.split("/");

  if (location.pathname === "/") return [];
  if (splittedPathname.length > 1) {
    const generatedBreadcrumbs:
      | Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[]
      | undefined = [];
    splittedPathname.map((path, index) => {
      if (path === "") {
        generatedBreadcrumbs.push({
          title: "Accueil",
          href: `${formatRoute()}/`,
        });
      }
      if (index === 1) {
        generatedBreadcrumbs.push({
          title:
            path === "destinations" ? capitalize(path) : capitalize("à propos"),
          href: `${formatRoute()}/${path}`,
        });
      }

      mockDestinations
        .filter((destination) => destination.id === Number(path))
        .map((destination) => {
          generatedBreadcrumbs.push({
            title: destination.name,
            href: `${formatRoute()}/destinations/${destination.id}`,
          });
        });
    });
    return generatedBreadcrumbs;
  }
};

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  const breadcrumbs = breadcrumbItemsGenerate(location);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#2E8B57", // Vert foncé
        }}
      >
        <div className="logo">
          <Title level={2} style={{ color: "white", margin: "10px 0" }}>
            EcoTravel
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "#2E8B57",
            marginLeft: "20px",
          }}
        />
      </Header>
      <Content style={{ padding: "0 48px", marginTop: "20px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          separator=">"
          items={breadcrumbs}
        />
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path={`${formatRoute()}/`} element={<Home />} />
            <Route
              path={`${formatRoute()}/destinations`}
              element={<DestinationList />}
            />
            <Route
              path={`${formatRoute()}/destinations/:id`}
              element={<Destination />}
            />
            <Route path={`${formatRoute()}/about`} element={<About />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        EcoTravel ©{new Date().getFullYear()} Boris
      </Footer>
    </Layout>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
