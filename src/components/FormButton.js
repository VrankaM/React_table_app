import { Form, Button } from "antd"

const FormButton = ({value}) => {
    return(
        <div className="button-wrapper">
            <Form.Item>
                <Button type="primary" htmlType="submit" className="submit-button" size="large" >
                    {value}
                </Button>
            </Form.Item>
        </div>
    )
}

export default FormButton
                    