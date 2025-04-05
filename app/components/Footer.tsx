const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container container mx-auto flex justify-between items-center py-4 px-6 bg-white shadow-md">
          <p>
            © {new Date().getFullYear()} Mon Portofolio
          </p>
          <div className="social_icons">
            
            <a
              href="https://github.com/cyrus-king"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/filadimitricurtis1234/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;