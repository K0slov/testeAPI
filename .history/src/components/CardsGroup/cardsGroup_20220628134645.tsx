import { Card } from '../Card/card'
import './style.css'

export function CardsGroup() {
    return (
        <div className="group">
            <div className="double">
                <Card />
                <Card />
            </div>
        </div>    
    )
}