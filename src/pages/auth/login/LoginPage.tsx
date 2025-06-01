import { Button, Checkbox, Form, Input } from "antd";
import type { FormProps } from "antd";
import styles from "./LoginPage.module.css";
import { formSchema } from "@/modules/auth/ui/schemas/login.schema";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

type FormItemType = {
  label?: string;
  name: string;
  rules?: { required: boolean; message: string }[];
};

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div style={{ textAlign: "center" }}>
          <img src="/img/logo-general.png" alt="" width={200} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Ingresar</h1>
          <span style={{ color: "gray" }}>
            No tienes una cuenta?{" "}
            <b style={{ color: "#068fff" }}>Crea una nueva</b>
          </span>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          requiredMark="optional"
        >
          <Form.Item<FieldType>
            label={
              <span className={styles.inputLabel}>Correo electrónico</span>
            }
            name="email"
            rules={formSchema.email as FormItemType["rules"]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className={styles.inputLabel}>Contraseña</span>}
            name="password"
            rules={formSchema.password as FormItemType["rules"]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox>Recuérdame</Checkbox>
          </Form.Item>
          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Ingresar
            </Button>
          </Form.Item>
          <span style={{ color: "#068fff", fontWeight: 600 }}>
            Olvidaste tu contraseña?
          </span>
        </Form>
      </div>

      <span className={styles.developmentInfo}>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/andresvpineros/"
          target="_blank"
          style={{ color: "#878787" }}
        >
          @Brandon Vargas
        </a>
      </span>
    </div>
  );
};

export default LoginPage;
