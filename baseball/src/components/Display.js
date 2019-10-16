import React from 'react'

export default function Display(props) {
    return (
        <div>
            <div>Display</div>
            <div data-testid="strikes">Strikes: {props.strikes}</div>
            <div data-testid="balls">Balls: {props.balls}</div>
        </div>
    )
}
