import "./Footer.css";
import maillogo from "../assets/new.png";
import githublogo from "../assets/githublogo.png";
import linkedinlogo from "../assets/linkedin1.svg";
import leetcode from "../assets/leetcode.png";
const foo = () => {
  return (
    <div className="box" id="footer">
      <p className="p2">
        Thank you for visiting my portfolio! If you enjoyed it, feel free to
        star it on GitHub. You can also contact me via email or LinkedIn.
      </p>
      <div className="insidelinks">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
          <img src={maillogo} alt="mail" className="cimg" />
        </a>
        <a href="https://github.com/gauthamgryffindor">
          <img src={githublogo} alt="github" className="cimg" />
        </a>
        <a href="https://leetcode.com/gauthamgryffindor7/">
          <img src={leetcode} alt="linkedin" className="cimg" />
        </a>
        <a href="https://linkedin.com/in/gautham-r-ab0561219">
          <img src={linkedinlogo} alt="linkedin" className="cimg" />
        </a>
      </div>
    </div>
  );
};
export default foo;
