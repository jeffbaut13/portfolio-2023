const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: jeferssonabv@gmail.com</p>
        <p>T: +57 (305) 777 93 24</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jeferssonbautista/"
          >
            <span className="icon fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
