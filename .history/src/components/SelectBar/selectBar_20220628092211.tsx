import { CaretRight } from 'phosphor-react'
import './styles.css'

export function SelectBar() {
    return (
        <div className='box' >
            <div className='select'>
                <span>select 1  </span> <CaretRight />
            </div>
            <div className='select'>
                <span>select 2  </span> <CaretRight />
            </div>
        </div>
    )
}