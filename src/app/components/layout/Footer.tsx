type FooterProps = {
  style?: React.CSSProperties;
};

const Footer: React.FC<FooterProps> = ({ style }) => {
  return (
    <footer style={style} className="py-2 bg-black text-white">
      <div className="text-center">
        (c) {new Date().getFullYear()} MatsBACCANO
      </div>
    </footer>
  );
};

export default Footer;
