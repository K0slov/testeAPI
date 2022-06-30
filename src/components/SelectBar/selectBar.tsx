import { CaretRight } from 'phosphor-react'
import './styles.css'

export default function SelectBar() {
    return (
        <div className='box' >
            <div className='select'>
                <a className='a' href='https://www.google.com/' target='_blank' >
                    <span>select 1  </span> <CaretRight />
                </a>
            </div>
            <div className='select'>
                <a className='a' href='https://www.google.com/search?q=contratar&sxsrf=ALiCzsZVpXrUdR0n8HyK4MF_CTUpOFT5HA%3A1656424490212&source=hp&ei=Kgi7YrOLC56J5OUP59CuqA8&iflsig=AJiK0e8AAAAAYrsWOqR0NmMnh9AtQmRY6l2QCkTU2-99&ved=0ahUKEwizyNaKptD4AhWeBLkGHWeoC_UQ4dUDCAc&uact=5&oq=contratar&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCAgAEIAEELEDOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToUCC4QgAQQsQMQgwEQxwEQowIQ1AI6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxCDARDUAjoRCC4QgAQQsQMQgwEQxwEQowI6CwguELEDEIMBENQCOggILhCABBCxAzoLCC4QgAQQxwEQrwE6CAgAELEDEIMBUMoEWOMSYMYWaAFwAHgAgAGdAYgBugmSAQMwLjmYAQCgAQGwAQo&sclient=gws-wiz' target='_blank' >
                    <span>select 2  </span> <CaretRight />
                </a>
            </div>
        </div>
    )
}