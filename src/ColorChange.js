import React from 'react';

export default class ColorChange extends React.Component {
    constructor(props) {
      super(props);

      this.state = localStorage.getItem('colors') 
                ? JSON.parse(localStorage.getItem('colors')) 
                : {
                    textColor: "",
                    bgColor: "",
                };
    }

    textColorChange = (e) => {
        const { value } = e.target;
        const regexp = /^#[0-9a-fA-F]+$/;
        if (regexp.test(value)) {
            this.setState(state => ({
                textColor: value
            }));
        };
    }

    bgColorChange = (e) => {
        const { value } = e.target;
        const regexp = /^#[0-9a-fA-F]+$/;
        if (regexp.test(value)) {
            this.setState(state => ({
                bgColor: value
            }));
        };
    }
    
    render() {
        localStorage.setItem('colors', JSON.stringify(this.state));
        const { textColor, bgColor } = this.state;
        
        return (
            <div>
                <p style={{backgroundColor: bgColor, color: textColor}}>
                    Lorem Ipsum is simply dummy text of the printing
                </p>
		        <p style={{backgroundColor: bgColor, color: textColor}}>
                    Lorem Ipsum is simply dummy text of the printing
                </p>
                <input type="text" onChange={e => this.textColorChange(e)} placeholder = 'text color: #000000'/>
		        <input type="text" onChange={e => this.bgColorChange(e)} placeholder = 'background color: #ffffff'/>
            </div>
        )
    }
}