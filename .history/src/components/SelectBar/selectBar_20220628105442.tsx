import { CaretRight } from 'phosphor-react'
import './styles.css'

export function SelectBar() {
    return (
        <div className='box' >
            <div className='select'>
                <a className='a' href='' target='_blank' >
                    <span>select 1  </span> <CaretRight />
                </a>
            </div>
            <div className='select'>
                <a className='a' href='' target='_blank' >
                    <span>select 2  </span> <CaretRight />
                </a>
            </div>
        </div>
    )
}