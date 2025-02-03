import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
  Welcome to  SRM Mill, a trusted name in the rice milling industry, dedicated to delivering high-quality rice to households and businesses. With years of experience and expertise, we specialize in producing premium rice varieties that meet global standards.  
<br></br>
<br></br>
<strong>Our Story</strong><br></br>
  Founded in [2001], [SRM Mill] started with a vision to provide the finest rice products while maintaining traditional values and embracing modern technology. What began as a small-scale operation has now grown into a well-established rice milling unit, recognized for quality, consistency, and customer satisfaction.  
  <br></br>
  <br></br>
  <strong>Our Commitment </strong><br></br>
At [SRM Mill], we are committed to:  <br></br>
✔ Superior Quality – We use state-of-the-art milling technology to ensure every grain is pure and full of nutrients.  <br></br>
✔ Sustainable Practices – We prioritize eco-friendly and sustainable production methods to reduce environmental impact.  <br></br>
✔ Customer Satisfaction – Our goal is to provide high-quality rice that meets the diverse needs of our customers.  <br></br>
<br></br>
<br></br>
<strong>Our Products</strong> <br></br>
We offer a wide range of rice varieties, including:  <br></br>
🌾 Long-Grain Rice – Ideal for biryanis and pulao  <br></br>
🌾 Medium-Grain Rice – Perfect for everyday meals  <br></br>
🌾 Short-Grain Rice – Best for sushi and desserts  <br></br>
🌾 Traditional Rice – Nutritious and flavorful for authentic dishes  
<br></br>
<br></br>
<strong>Why Choose Us?</strong><br></br>
✅ Modern Milling Technology – Ensures hygienic and high-quality processing <br></br> 
✅ Stringent Quality Control – Every batch is carefully inspected  <br></br>
✅ Affordable Prices – Premium rice at competitive rates  <br></br>
✅ Timely Delivery – We ensure prompt and reliable distribution  <br></br>
<br></br>
<br></br>
<strong>Get in Touch</strong>  <br></br>
We are dedicated to bringing the best rice to your table. For inquiries, bulk orders, or partnerships, feel free to contact us at:  <br></br>
📍 Location: [ <a href='https://maps.app.goo.gl/FB2vTU1eudySetmd7'target='_blank' >Google Map</a> ]  <br></br>
📞 Phone: [75982313--]  <br></br>
📧 Email: [srisavadammalricemill@gmail.com]  <br></br>
🌐 Website: [Your Website]  <br></br>

At [SRM Mill], we take pride in delivering rice that brings families together over delicious meals. 🌾🍚  

Let me know if you'd like me to customize this further! 😊
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="1.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Long rice</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="2.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mediun rice</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="3.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Small rice</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="4.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Traditional</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage