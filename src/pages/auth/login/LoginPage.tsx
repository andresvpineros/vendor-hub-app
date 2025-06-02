import { Button, Checkbox, Form, Input, Flex, Spin, notification } from "antd";
import type { FormProps } from "antd";
import styles from "./LoginPage.module.css";
import { formSchema } from "@/modules/auth/ui/schemas/login.schema";
import { useNavigate } from "react-router-dom";
import { UserSignsInUseCase } from "@/modules/auth/domain/use_cases/userSignsIn.usecase";
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { email = "", password = "" } = values;
    const useCase = new UserSignsInUseCase();
    setLoading(true);

    try {
      const result = await useCase.call(email, password);

      if (result.success) {
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
        api.error({
          message: result.message,
          placement: "bottomRight",
        });
      }
    } catch (error) {
      setLoading(false);
      api.error({
        message: error instanceof Error ? error.message : "Error signing in",
        placement: "bottomRight",
      });
    }
  };

  return (
    <div className={styles.container}>
      {contextHolder}
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
            <Flex gap="left">
              <Spin spinning={loading} delay={100}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginButton}
                >
                  Ingresar
                </Button>
              </Spin>
            </Flex>
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
