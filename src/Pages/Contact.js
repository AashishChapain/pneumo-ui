import React from 'react';

const Contact = () => {
  return (<>

  <div className="container">
  <h1 className="text-center" style={{fontSize:'3.5rem',fontWeight:"bold",paddingTop:"2rem"}}>Contact us</h1>
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow">
              <iframe title="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.184431988603!2d85.31849352917118!3d27.694499898924864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ae08c068d9%3A0x475bed1f66d060c!2sInstitute%20of%20Engineering%2CThapathali%20Campus!5e0!3m2!1sen!2snp!4v1645434175054!5m2!1sen!2snp" width="100%" height="450"></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Leave your Message</h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-success mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt='...' />
                      </div>
                      <div className="mx-2">
                        <h6 className="font-weight-medium">Address</h6>
                        <p className="">Thapathali Engineering Campus  
                          <br /> Thapathali, Kathmandu</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt='...' />
                      </div>
                      <div className="mx-2">
                        <h6 className="font-weight-medium">Phone</h6>
                        <p className="">01-4246307
                          <br /> 9860020333</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt='...' />
                      </div>
                      <div className="mx-2">
                        <h6 className="font-weight-medium">Email</h6>
                        <p className="">
                          tcioe.edu.np
                          <br /> info@tcioe.edu.np
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </>);
};

export default Contact;
