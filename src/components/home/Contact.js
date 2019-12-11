import React from 'react';
import Title from '../Title';


export default function Contact() {
  return (
    <section className="contact pt-3 pb-5">
      <Title title="Get in touch" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/hectordelangel@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control"
                name="name"
                id="name"
                placeholder="Han Solo"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                className="form-control"
                name="email"
                id="email"
                placeholder="hansolo@rebels.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea 
                name="description" 
                id="description" 
                className="form-control" 
                cols="30" 
                rows="10" 
                placeholder="Your comments/questions.">                  
              </textarea>
            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-yellow btn-block text-capitalize text-center ">Submit</button>

          </form>
        </div>
      </div>
    </section>
  )
}
