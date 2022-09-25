

export const Contact = () => {
    return (


        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form id="request" className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input className="contactus" placeholder="Full Name" type="type" name="Full Name" />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Email " type="type" name="Email " />
                                </div>
                                <div className="col-md-12">
                                    <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                                </div>
                                <div className="col-md-12">
                                    <textarea className="textarea" placeholder="Message" type="type" message="Name" defaultValue={"Message"} />
                                </div>
                                <div className="col-md-12">
                                    <button className="send_btn">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="map_main">
                            <div className="map-responsive">
                                <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=borovo &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width={600} height={386} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}