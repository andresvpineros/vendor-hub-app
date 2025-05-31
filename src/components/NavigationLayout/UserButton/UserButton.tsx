import { Avatar, Typography } from "antd";
import { UserOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./UserButton.module.css";
import { useNavigate } from "react-router";
const { Text } = Typography;

const UserButton = () => {
  const navigate = useNavigate();

  const handleUserProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div>
      <button className={styles.userButton} onClick={handleUserProfileClick}>
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
