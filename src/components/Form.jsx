const Form = () => {
    return (  
        <div className="contact-form-wrapper">
                <form id="contact-form" action="mailto:scheduling@flowstatemt.com">
                    <div className="field-wrapper">
                        <label>Name:</label>
                        <input 
                            type="text"
                            name="Name"
                            required />
                    </div>
                    <div className="field-wrapper">
                        <label>Email:</label>
                        <input type="email" 
                            name="email"
                            required />
                    </div>
                    <div className="field-wrapper">
                        <label>I am a:</label>
                        <select>
                            <option value="default"></option>
                            <option value="Parent">Parent</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>
                    <div className="field-wrapper">
                        <label>Wanting to:</label>
                        <select>
                            <option value="default"></option>
                            <option value="Schedule a Session">Schedule a Session</option>
                            <option value="Ask a Question">Ask a Question</option>
                    </select>
                    </div>
                    <div className="field-wrapper">
                        <label>I am potentially seeking support for:</label>
                        <select>
                            <option value="default"></option>
                            <option value="Math">Math</option>
                            <option value="Science">Science</option>
                            <option value="Executive Functioning">Executive Functioning</option>
                            <option value="Web Design/Computer Programming">Web Design/Computer Programming</option>
                        </select>
                    </div>
                    <div className="field-wrapper">
                        <label>Here are the specifics:</label>
                        <textarea
                        id="form-specifics"
                        required
                        ></textarea>
                    </div>
                    
                    <button id="submit">Submit</button>
                </form>
            </div>
    );
}
 
export default Form;
