import React from 'react'

const Timeline = () => {
    
    window.addEventListener('scroll', () => {
        const dot = document.getElementById('dot');
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const percentScrolled = scrollY / maxScroll;
        const dotTop = percentScrolled * (document.body.scrollHeight - 30);
        dot.style.top = `${dotTop}px`;
    });


    return (
        <>
            <div class="main-timeline" >
                <div className="dot" id='dot'></div>
                <div class="container">
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">2018</span>
                            <div class="timeline-icon">
                                <i class="fa fa-rocket"></i>
                            </div>
                            <div class="content">
                                <h3 class="title">Web Development</h3>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">2017</span>
                            <div class="timeline-icon">
                                <i class="fa fa-users"></i>
                            </div>
                            <div class="content">
                                <h3 class="title">JavaScript</h3>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">2016</span>
                            <div class="timeline-icon">
                                <i class="fa fa-globe"></i>
                            </div>
                            <div class="content">
                                <h3 class="title">web designing</h3>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">2015</span>
                            <div class="timeline-icon">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <div class="content">
                                <h3 class="title">webdevelopment</h3>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="#" class="timeline-content">
                            <span class="timeline-year">2014</span>
                            <div class="timeline-icon">
                                <i class="fa fa-users"></i>
                            </div>
                            <div class="content">
                                <h3 class="title">java script</h3>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline