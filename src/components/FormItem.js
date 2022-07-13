import { Form } from "antd"

const FormItem = ({data}) => {
    return(
        <div>
            <Form.Item
                label={data?.label}
                name={data?.name}
                rules={[data?.rules]}
            >
                {data?.input}
            </Form.Item>
        </div>
    )
}

export default FormItem