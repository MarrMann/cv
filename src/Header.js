function Header(){
    return (
        <div className="header">
            <div className="header-left header-links">
                <div>
                    <i className="far fa-envelope" />
                    <a href="mailto:mail@example.com">mail@example.com</a>
                </div>
                <div>
                    <i className="fa fa-phone" />
                    <a href="tel:12345678">12345678</a>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt" />
                    <a href="http://maps.google.com/?q=location">Location</a>
                </div>
            </div>
            <div className="header-center">
                <p>Martin Nygaard</p>
            </div>
            <div className="header-right header-links">
                <div>
                    <a href="https://github.com/MarrMann">MarrMann</a>
                    <i className="fab fa-github"></i>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/martinandersny/">martinandersny</a>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div>
                    <a href="https://twitter.com/MarrMany">@MarrMany</a>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;