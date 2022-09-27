import '../styles/accordion.css';
import { useState } from 'react';
import PatContent from "./../content/phil-patience.md";
import reactMarkdown from 'react-markdown';


function Accordion(props) {

    const data = props.data;
    const header = props.header;
    console.log("******")
    console.log(data)
    console.log("******")
    // const content = props.content;

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

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
                             <div dangerouslySetInnerHTML={{__html: item.content}} />
                        </div>
                    </div>
                ))}

            </div>
        </div>

        
        
    )
}

export default Accordion