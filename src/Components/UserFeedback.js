import React from 'react';
import './Userfeedback.css';
import HomeNav from './HomeNav';

const UserFeedback = () => {
  return (
    <>
    <HomeNav></HomeNav>
    <div className="container">
          <div className="row">
              <div className="col-md-6 mt-3">
                  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/df7eac147767277.62c848d68fa9d.gif" width="100%" height="534" />
                  <div className="carousel-caption">

                  </div>
              </div>
              <div className="col-md-6">
                  {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOmKrowFTZUZPoIhND5tPRNNVOq6Ht4nk2Q&usqp=CAU" /> */}
                  <form>
                      <div className="row mb-4 mt-4">
                          <div className="col-md-6">
                              <input type="text" name="fname" placeholder="First Name*" className="form-control form-group" required />
                          </div>
                          <div className="col-md-6">
                              <input type="text" name="lname" placeholder="Last Name*" className="form-control form-group" required />
                          </div>
                      </div>
                      <input type="email" name="email" placeholder="example@gmail.com" className="form-control form-group" required />
                      <br />
                      <label className='font-weight-bold'>How Do You Think! We are*</label>
                      <select className="form-control" required>
                          <option selected disabled>Select Environment</option>
                          <option>Excellent</option>
                          <option>Good</option>
                          <option>Bad</option>
                          <option>Too Bad</option>
                          <option>Other</option>
                      </select>
                      <br />
                      <label className='font-weight-bold'>How would you rate your experience (out of 5)?*</label>
                      <select className="form-control">
                          <option selected disabled>5</option>
                          <option>4</option>
                          <option>3</option>
                          <option>2</option>
                          <option>1</option>
                      </select>
                      <br />
                      <label className='font-weight-bold'>How would you rate achievement of your zoo (Description)?</label>
                      <input type="text" name="decr" className="form-control" placeholder="Description" style={{ height: '60px' }} required />
                      <br />
                      <label className='font-weight-bold'>What your opionion about country or sate?</label>
                      <div className="row">
                          <div className="col-md-6">
                              <select className="form-control">
                                  <option selected disabled>Select Country</option>
                                  <option>Pakistan</option>
                                  <option>India</option>
                                  <option>UAE</option>
                                  <option>Iran</option>
                                  <option>Others</option>
                              </select>
                          </div>
                          <div className="col-md-6">
                              <select className="form-control">
                                  <option>Haryana</option>
                                  <option>Bihar</option>
                                  <option>Uttar Pradesh</option>
                                  <option>Others</option>
                              </select>
                          </div>
                      </div>
                      <br />
                      <button className="btn btn-success btn-block">Submit</button>
                  </form>
              </div>
          </div>
      </div></>
  );
};

export default UserFeedback;