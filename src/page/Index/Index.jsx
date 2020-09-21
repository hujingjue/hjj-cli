import React, { Component } from 'react';
import './index.scss'
import _ from 'lodash'

class Index extends Component {
    constructor(props){
        super(props)
        this.state={ 
            obj:{a:1}
        }
    }

    componentDidMount(){
        console.log(a)
        console.log(_.get(this.state,'obj'))
    }

    render() {
        return (
            <div id="Index">
                index
            </div>
        );
    }
}

export default Index;