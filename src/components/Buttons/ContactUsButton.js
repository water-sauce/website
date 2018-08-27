import React from "react";

function ContactUsButton(props) {
    return (
        <button className={props.class} onClick={props.onClick}>
            {props.cta}
        </button>
    );
}

export default ContactUsButton;
