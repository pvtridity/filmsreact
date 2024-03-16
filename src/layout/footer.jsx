function Footer(){
    return <footer className="page-footer
    #43a047 green darken-1">
    <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()}
        Satzhanov Marat
        <a className="grey-text
        text-lighten-4 right" href="#!">Repository</a>
      </div>
    </div>
  </footer>
}

export { Footer };