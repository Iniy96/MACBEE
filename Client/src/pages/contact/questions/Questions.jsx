import React, { useEffect } from 'react'
import "./question.css"
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Questions = () => {
    const questionsanimation1 = useAnimation();
    const questionsanimation2 = useAnimation();

    const [questionsref1, questionsinView1] = useInView({ threshold: 0.2,triggerOnce:true });
    const [questionsref2, questionsinView2] = useInView({ threshold: 0.2,triggerOnce:true });

    useEffect(() => {
        if (questionsinView1) {
            questionsanimation1.start({
                opacity: 1, y: 0, scale: 1,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!questionsinView1) { questionsanimation1.start({ opacity: 0, y: 75, scale: 0.5 }); }
    }, [questionsinView1]);

    useEffect(() => {
        if (questionsinView2) {
            questionsanimation2.start({
                opacity: 1, y: 0, x: 0,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!questionsinView2) { questionsanimation2.start({ opacity: 0, y: 75, x: 0, transition: { delay: 0.25, duration: 0.25 } }) }
    }, [questionsinView2]);

    return (
        <>
            <motion.div animate={questionsanimation1} ref={questionsref1}>
                <h4 className='text-center fs-2 mt-5'>Questions ?</h4>
                <p className='text-center '>We are happy to respond, just shoot your Q's..</p>
            </motion.div>
            {/* Accordian menu starts here */}
            <motion.div className="accordion accordion-flush" id="accordionFlushExample" ref={questionsref2} animate={questionsanimation2}>
                {/* Accordian Item 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What does the name MCABEE mean?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                {/* Accordian item 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What are the products owened by MCABEE?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                {/* Accordian item 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What Services does MCABEE offer?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                {/* Accordian item 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            How to get a job at MCABEE?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                {/* Accordian item  */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            How to consult a project with MCABEE?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <a className='btn btn-outline-secondary ms-3 my-4' href='#' style={{ borderColor: "#bfbfbf" }}>Something else ?</a>
            </motion.div>
        </>
    )
}
