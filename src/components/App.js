
import React, { Component } from "react";

import '../styles/App.css';

import data from '../data'

class App extends Component {

constructor(props) {

super(props);

this.state = {

slides: data,

index: 0,

};

this.handleRestartClick = this.handleRestartClick.bind(this);

this.handlePrevClick = this.handlePrevClick.bind(this);

this.handleNextClick = this.handleNextClick.bind(this)

}

handleNextClick(){

const { index, slides } = this.state;

this.setState({index: index+1})

}

handlePrevClick(){

const {index} = this.state;

this.setState({index:index-1});

}

handleRestartClick(){

this.setState({index:0})

}

render() {

const { index, slides } = this.state;

return (

<div className="container">

<div className="main">

<button data-testid="button-next"

disabled={index === slides.length - 1}

onClick={this.handleNextClick}

>Next</button>

<button data-testid="button-prev"

disabled={index === 0}

onClick={this.handlePrevClick}

>Prev</button>

<button

data-testid="button-restart"

disabled={index === 0}

onClick={this.handleRestartClick}

>

Restart

</button>

</div>

<div className="all-slides">

<h1 data-testid="title">{slides[index].title}</h1>

<p data-testid="text">{slides[index].text}</p>

</div>

</div>

);

}

}

export default App;

