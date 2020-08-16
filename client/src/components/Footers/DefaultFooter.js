/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Ayititunes
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.encodersoft.codes/"
              target="_blank"
            >
               Encodersoft
            </a>
            
            <a
              href=""
              target="_blank"
            >
             
            </a>
            
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
