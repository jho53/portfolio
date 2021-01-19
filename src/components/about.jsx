import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">Who Am I?</span>
                                            <h2 className="colorlib-heading">Hi there, I'm Jimmy!</h2>
                                            <p>I'm a BCIT graduate based in Vancouver 🇨🇦 with experience in <strong>Web and Mobile Development </strong> with a passion for <strong> DevOps, and Cybersecurity</strong>. I’m a detail-oriented individual with a diverse academic, work and project experience that allowed me to build and refine a wide and versatile skill set to tackle interesting and challenging tasks ahead. I'm eager to offer my passionate dedication for knowledge and quality to improve and build on new and existing projects.
                                            </p>
                                            <p>I'm currently looking for a full-time position that will allow me to further polish my skills in the IT industry!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my skills</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web and Mobile Development</h3>
                                        <p>I have industry experience building websites using HTML, CSS, JavaScript, Bootstrap, AngularJS, and React Native</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Agile and Project Management</h3>
                                        <p>Working with clients, I have experience in creating a project from start to finish with iterative improvements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Database Administration</h3>
                                        <p>Need to backup and replicate your database? Want to speed up your search queries? I got it!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-cog" />
                                    </span>
                                    <div className="desc">
                                        <h3>DevOps</h3>
                                        <p>I have knowledge about Jenkins, CI/CD, Docker, K8s, Bash Scripting and Automation with Vagrant and Ansible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
