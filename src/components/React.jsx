import React, { createElement, useState } from "react";

const headersTable = ["header1", "header2", "header3"]
const paragraph = ["Jaja", "Pejdy", "W aptece"]

const Task3 = () => {
    const cards = headersTable.map((className, index) => {
        return React.createElement(
            'div',
            {className: 'card', key: index},
            React.createElement(
                'h2',{className: className},
                `Nagłówek ${className}`
            ),
            React.createElement(
                'p',
                {className : 'paragraph-div'},
                `${paragraph[index]}`
            ),
            React.createElement(
                'a',
                {className : 'div-a'},
                'Benzyna'
            )
        )
    })
    return React.createElement(React.Fragment, null, cards);
};

export default Task3;