function Header(){
    return (
        <div className="header">
            <div className="header-left">
                <div>
                    <i className="far fa-envelope"></i>
                    <a href="mailto:mail@example.com@example.com">mail@example.com</a>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <a href="tel:+123456789">[REDACTED]</a>
                </div>
            </div>
            <div className="header-center">
                <p>Martin Nygaard</p>
            </div>
            <div className="header-right">
                <div>
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/MarrMann">MarrMann</a>
                </div>
                <div>
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/martinandersny/">martinandersny</a>
                </div>
                <div>
                    <i className="fab fa-twitter"></i>
                    <a href="https://twitter.com/MarrMany">MarrMany</a>
                </div>
            </div>
        </div>
    );
}

export default Header;