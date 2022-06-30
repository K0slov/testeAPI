import { Component, useEffect, useState } from 'react';
import { api } from '../../service/api';
import './style.css'

export class Card extends Component {

    state= {
        artigos: [],
    }

    async componentDidMount() {
        const response = await api.get('')

        this.setState({ artigos: response.data})
    }
    render() {
        const { artigos } = this.state
        console.log(artigos)
        return (
            <div className="card">
                
                {artigos.map((data => (
                    <li className="click" key={data}>
                        <a className="click" href='#' target='_blank'>
                            <div className='titulo'>
                                <span className="spanTitle">{}</span>
                            </div>
                        </a>
                    </li>
                
                )))
                 } </div>
                )}
    }
