import React, { Component } from 'react'
import './Tourlist.scss'
import {tourData} from '../../tourData'
import Tour from '../Tour/index'

export default class TourList extends Component {
    state ={
        tours:tourData
    }

    removeTours = (id)=>{
        const {tours} = this.state;
        const sorted = tours.filter((tour)=>{
            return tour.id !== id
        })
        this.setState({
            tours:sorted
        })
    }
    render() {
        const{tours} = this.state
        // console.log(tours);
        return (
            <section className='tourlist'>
                {tours.map((tour)=>{
                    return <Tour key={tour.id} tour={tour}  removeTours={this.removeTours}/>
                })}
            </section>
        )
    }
}
