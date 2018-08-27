import React from "react";

function InlineFAQ(props) {
    let FAQRow = props.questions.map(question => (
        <li className="faq-inline">
            <h3 className="faq-question">{question.question}</h3>
            <p className="faq-answer">{question.answer}</p>
        </li>
    ));

    return (
        <div className="container faq-section">
            <h2 className="uppercase-small-bold text-align-center m-b-1">
                Frequently Asked Questions About {props.title}
            </h2>
            <ul>{FAQRow}</ul>
        </div>
    );
}

export default InlineFAQ;
