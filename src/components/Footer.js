import React from "react"

const Footer = () => {
    return (
        <footer className="page-footer">
            <p>
                &copy; {new Date().getFullYear()} <span>MYH</span>. Built with{""}
                <a href="https://www.gatsbyjs.com/"></a>
            </p>
        </footer>
    )
}

export default Footer;
