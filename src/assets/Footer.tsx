import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <footer className="bg-white text-black mt-5 p-4 text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-md-0">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: info@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Example Street, City, Country</li>
          </ul>
        </div>
        <div className="col-md-6 mb-md-0">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-black  bi-facebook"> Facebook</a></li>
            <li><a href="#" className="text-black bi-twitter"> Twitter</a></li>
            <li><a href="#" className="text-black bi-instagram"> Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <p>&copy; {new Date().getFullYear()} Tony Moore | All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer