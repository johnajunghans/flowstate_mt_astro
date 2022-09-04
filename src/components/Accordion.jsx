import '../styles/accordion.css';
import { useState } from 'react';


function Accordion(props) {

    const data = props.data;
    const header = props.header;
    // const content = props.content;

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    };

    return (
        <div className="accordion-wrapper slate">
            <div className="accordion-header">
                    <h2 className='accordion-header-text'> { header } </h2>
                </div>
            <div className="accordion slate">
                {data.map((item, i) => (
                    <div key={item.key} className={`accordion-item accordion-${item.key}`}>
                        <div className="title" onClick={() => toggle(i)}>
                            <h3>{item.title}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content' : 'content hide'}>
                            {Array.isArray(item.content)
                            ? item.content.map((para, i) => (
                                <div key={i} className='para-wrapper'>
                                    <p className='para-content' id={`${item.title}-para-${i}`}>{para}</p>
                                    <br />
                                </div>
                            ))
                        : console.log(item.content,false)}
                        </div>
                    </div>
                ))}

            </div>
        </div>

        
        
    )
}

export default Accordion