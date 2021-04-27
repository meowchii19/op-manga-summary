import React, { Component } from 'react'; 
import axios from 'axios'
import handleImage from './handleImg'

export default class Chapters extends Component {
    constructor() {
        super(); 
        this.state = {
            loading: true,
            chapters: []
            };
        }
    componentDidMount = () => {
            axios.get('/chapters/')
                        .then(res => {
                       this.setState({
                        loading: false,
                        chapters: res.data.items
                });
            });
        };


    render() {


        return !this.state.loading && this.state.chapters.length > 0 ? (
            <div>
                {this.state.chapters.map(chapter => (
                    <>
                    <h2 key={chapter.id}>{chapter.chapter}</h2>
                        <p>{chapter.summary}</p>
                    <img src= {handleImage(chapter.cover_images)}/>
                    
                        </>
                ))}
            </div>
        ) :  false
    }
} 
