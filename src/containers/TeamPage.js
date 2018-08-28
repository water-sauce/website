import React, { Component, Fragment } from "react";
import TeamPhoto from "../components/TeamPhoto";

const teammates_sm = [
    {
        employee_name: "Ilya Semin",
        employee_title: "Chief Executive Officer / Founder",
    },
    
];

const teammates_spb = [
    {
        employee_name: "Max Rossoshansky",
        employee_title: "Head Of Russian Office",
    },
];

const teammates = {
    teammates_sm,
    teammates_spb
};

class TeamPage extends Component {
    constructor() {
        super();
        this.state = { teammates: "teammates_sm" };
        this.toggle_teammates = this.toggle_teammates.bind(this);
    }

    toggle_teammates(team) {
        this.setState({
            teammates: `teammates_${team}`
        });
    }

    render() {
        return (
            <div className="under-banner-padding">
                <center className="toggle toggle-teams">
                    <a
                        className={`${
                            this.state.teammates === "teammates_sm"
                                ? " active"
                                : ""
                        }`}
                        onClick={() => this.toggle_teammates("sm")}
                    >
                        <img  alt="San Mateo icon | Datanyze" />
                        <span>San Mateo, CA</span>
                    </a>
                    &nbsp;
                    <a
                        className={`${
                            this.state.teammates === "teammates_spb"
                                ? " active"
                                : ""
                        }`}
                        onClick={() => this.toggle_teammates("spb")}
                    >
                        <img
                            alt="St. Petersburg icon | Datanyze"
                        />
                        St. Petersburg, Russia
                    </a>
                </center>
                <TeamPhoto teammates={teammates[this.state.teammates]} />
            </div>
        );
    }
}

export default TeamPage;
