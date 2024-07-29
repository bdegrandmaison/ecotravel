import { Spin } from "antd";

const Loading = () => (
  <div
    style={{
      width: "100%",
      height: "800px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spin size="large" />
  </div>
);

export default Loading;
