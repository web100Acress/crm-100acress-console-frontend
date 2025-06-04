import  { useState } from "react";
import { Col, Row, message } from "antd";
import CommonForm from "../../../helpers/utils/CommonForm";
import { USER_ROLE_OPTIONS } from "../../../helpers/constants/userRoles.constant";
import { CreateCRMUser} from "../../../services/Api_Service";

const CreateUserControl = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter User Name",
    type: "text",
    componentType: "input" as const,
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter User email",
    type: "email",
    componentType: "input" as const,
    required: true,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input" as const,
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your 10-digit phone number",
    componentType: "input" as const,
    type: "tel",
    required: true,
  },
  {
    name : "role",
    label : "Select Role",
    placeholder :"Select the role",
    componentType :"select" as const,
    type: "text",
    options: USER_ROLE_OPTIONS,
    required:true,
  }
];

const CreateUser = () => {

  console.log(USER_ROLE_OPTIONS)
  const initialFormData = {
    Name: "",
    email: "",
    password: "",
    phone: "",
    role: ""
  };
  const [formData, setFormData] = useState<Record<string, string | boolean>>(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleuserCreated = async (formData:any) => {
    setLoading(true);
    try {
      if (!/^\d{10}$/.test(formData.phone as string)) {
        message.error("Phone number must be exactly 10 digits.");
        setLoading(false);
        return;
      }

      const response = await CreateCRMUser(formData);
      console.log(response)
      console.log("Form Submitted:", formData);
      message.success("User created successfully!");
      setFormData(initialFormData);
    } catch (err) {
      message.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <CommonForm
          formControls={CreateUserControl}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleuserCreated}
          buttonText={loading ? "User Creating..." : "Create User"}
          isBtnDisabled={loading}
        />
      </Col>
    </Row>
  );
};

export default CreateUser;
