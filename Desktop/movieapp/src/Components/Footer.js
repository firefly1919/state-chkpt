const Footer = () => {
    const date = new Date().getFullYear();
    return (
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          textAlign: "center",
          padding: "2%",
        }}
      >
        <p>Copy right © {date}</p>
      </div>
    );
  };
  
  export default Footer;
  