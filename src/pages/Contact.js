import FormItem from "../components/FormItem"
import FormButton from "../components/FormButton"
import "../css/Contact.css"
import { Form, Input, Select } from "antd"

const Contact = () => {
    const onFinish = () => {
        console.log("finished")
    }

    const onFinishFailed = () => {
        console.log("failed")
    }

    const {Option} = Select

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 80 }}>
            <Option value="">None</Option>
            <Option value="+421">+421</Option>
            </Select>
        </Form.Item>
    )
    
    const formData = [
        {
            label: "Your name",
            name: "name",
            rules: {
                required: true, message: "Please input your name"
            },
            input: <Input />
        },{
            label: "Your email address",
            name: "email",
            rules: {
                required: true, message: "Please input your email"
            },
            input: <Input />
        },{
            label: "Your phone number",
            name: "phone-number",
            rules: {
                required: false
            },
            input: <Input addonBefore={prefixSelector} />
        },{
            label: "Your message",
            name: "message",
            rules: {
                required: true, message: "Please input your message"
            },
            input: <Input.TextArea />
        }
    ]

    return(
        <div className="form-container">
            <div className="form-wrapper">
                <Form
                    name="basic"
                    labelAlign="left"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    {
                        formData.map( (data) => {
                            return <FormItem className="form-item" key={data.name} data={data} />
                        })
                    }
                    <FormButton value="Submit" />
                </Form>
            </div>
        </div>
    )
}

export default Contact
