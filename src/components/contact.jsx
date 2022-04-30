import React from 'react'
import Navbar from './navbar';
import './navbar.css';


import Footer from './footer';
import './footer.css';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div class="overlay-mf"></div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="contact-mf">
                            <div id="contact" class="box-shadow-full">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="title-box-2">
                                            <h5 class="title-left">
                                            Send Message Us
                                            </h5>
                                        </div>
                                        <div>
                                            <form action="" method="post" role="form" class="contactForm">
                                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                                <div id="errormessage"></div>
                                                <div class="row">
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                            <div class="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                            <div class="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div class="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-3">
                                                        <div class="form-group">
                                                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                            <div class="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="title-box-2 pt-4 pt-md-0">
                                            <h5 class="title-left">
                                            Get in Touch
                                            </h5>
                                        </div>
                                        <div class="more-info">
                                            <p class="lead">
                                            You can contact us via email, call or across my social media pages!
                                            </p>
                                            <ul class="list-ico">
                                            <li><span class="ion-ios-telephone"></span> +2349055476920</li>
                                            <li><span class="ion-email"></span> Yummy Restaurant</li>
                                            </ul>
                                        </div>
                                        <div class="socials">
                                            <ul>
                                            <li><a href="https://www.facebook.com/benjamin.oyejide/"><span class="ico-circle"><i class="ion-social-facebook"></i></span></a></li>
                                            <li><a href="https://www.instagram.com/benjamin_busari/"><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                                            <li><a href="https://twitter.com/bheejayrichard"><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                                            <li><a href="https://wa.me/+2349055476920"><span class="ico-circle"><i class="ion-social-whatsapp"></i></span></a></li>
                                            <li><a href="https://github.com/benjamin3327?tab=repositories"><span class="ico-circle"><i class="ion-social-github"></i></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Contact;