import React from "react";
import { Panel } from "react-bootstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

function FAQ(props) {
    let FAQRow = props.questions.map(question => (
        <Panel key={question.id}>
            <Panel.Heading>
                <Panel.Title toggle>
                    <h3 className="faq-question">{question.question}</h3>
                    <FontAwesomeIcon icon="plus" />
                </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <p className="faq-answer">{question.answer}</p>
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    ));

    return (
        <div className={props.addedClass}>
            <div className="container faq-section">
                <h2 className="uppercase-small-bold text-align-center m-b-1">
                    Frequently Asked Questions About {props.title}
                </h2>
                {FAQRow}
            </div>
        </div>
    );
}

export default FAQ;
