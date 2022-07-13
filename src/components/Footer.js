import { Row } from "antd"
import { FaGithub, FaFacebookF, FaStackOverflow } from "react-icons/fa"
import FooterColumn from "./FooterColumn"
import "../css/Footer.css"

const Footer = () => {
    const footerData = [
        {
            icon: < FaGithub className="footer-icon"/>,
            heading: "Our Github",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate est placeat distinctio culpa alias ipsum veniam labore, doloribus, eligendi repudiandae. Harum odio est sint cumque aspernatur pariatur?"
        },{
            icon: < FaFacebookF className="footer-icon"/>,
            heading: "Find us on Facebook",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate est placeat distinctio culpa alias ipsum veniam labore, doloribus, eligendi repudiandae."
        },{
            icon: < FaStackOverflow className="footer-icon"/>,
            heading: "Get help on Stack Overflow",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate est placeat distinctio culpa alias ipsum veniam labore, doloribus, eligendi repudiandae. Harum odio est sint cumque aspernatur pariatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
    ]

    return(
        <div className="footer-container">
            <footer className="footer">
                <Row gutter={[16, 16]} justify="space-around">
                    {
                        footerData.map(
                                (data) => {
                                    return <FooterColumn  data={data} key={footerData.indexOf(data)} />
                                }
                            )
                        }
                </Row>
                <p className="footer-text">© Copyright 2022</p>
            </footer>
        </div>
    )
}

export default Footer