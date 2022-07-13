import { Col } from "antd"
import "../css/Footer.css"

const FooterColumn = (props) => {
    return(
        <Col xs={20} sm={12} lg={8}>
            <div className="footer-column">
                {props.data.icon}
                <h2 className="footer-heading">
                    {props.data.heading}
                </h2>
                <p>
                    {props.data.content}
                </p>
            </div>
        </Col>
    )
}

export default FooterColumn
                