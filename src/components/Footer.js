import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
          <footer className="bg-dark text-center text-white" >

            <div className="container p-4 pb-0">

                <section className="mb-4">

                <Link className="btn btn-outline-success btn-floating m-1" to="/" role="button"
                    ><i className="fab fa-facebook-f"></i
                ></Link>

                <Link className="btn btn-outline-success btn-floating m-1" to="/" role="button"
                    ><i className="fab fa-twitter"></i
                ></Link>


                <Link className="btn btn-outline-success btn-floating m-1" to="/" role="button"
                    ><i className="fab fa-google"></i
                ></Link>

                <Link className="btn btn-outline-success btn-floating m-1" to="https://www.instagram.com/shivarator.exe/" role="button"
                    ><i className="fab fa-instagram"></i
                ></Link>

                <Link className="btn btn-outline-success btn-floating m-1" to="https://www.linkedin.com/in/shivang-saini-795419232/" role="button"
                    ><i className="fab fa-linkedin-in"></i
                ></Link>

                <Link className="btn btn-outline-success btn-floating m-1" to="https://github.com/cvang9" role="button"
                    ><i className="fab fa-github"></i
                ></Link>
                </section>

            </div>



            <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
                who is: 
                <Link className="text-success" to="https://shivang-portfolio.vercel.app/">{"  "} shoeman? </Link>
            </div>

            </footer>
    </>
  )
}

export default Footer;
