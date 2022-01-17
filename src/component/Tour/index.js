import React, { Component } from 'react'
import "./tour.scss"

export default class Tour extends Component {
    state={
        showInfo:false
    }
     handleInfo = ()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        
        const {id, city, name, img, info} = this.props.tour
        const {removeTours} = this.props
        return (
            <article className='tours'>
                <div className='img-container'>
                    <img 
                    src={img}
                    alt=''
                    />
                    <span className='close-btn' onClick={()=>{removeTours(id)}}>
                         <i className='fas fa-window-close' />
                    </span>
                </div>
                <div className='tours-info'>
                     <h3>{city}</h3>
                     <h4>{name}</h4>
                     <h5>
                        info{' '}

                         <span onClick={this.handleInfo}>
                             <i className="fas fa-caret-square-down"></i>
                         </span>
                     </h5>
                     {this.state.showInfo && <p>{info}</p>}
                     
                </div>
            </article>
        )
    }
}
