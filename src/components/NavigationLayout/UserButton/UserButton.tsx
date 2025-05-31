import { Avatar, Typography } from "antd";
import { UserOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./UserButton.module.css";
const { Text } = Typography;

const UserButton = () => {
  return (
    <div>
      <button className={styles.userButton}>
        <Avatar icon={<UserOutlined />} size="large" />

        <div className={styles.userButtonText}>
          <Text strong style={{ fontSize: 15 }}>
            Hola, Brandon
          </Text>
          <Text type="secondary" style={{ fontSize: 14 }}>
            Tu perfil <RightOutlined size={10} />
          </Text>
        </div>
      </button>
    </div>
  );
};

export default UserButton;
