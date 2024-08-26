import './Header.css'

export const Header = (props) => {
    console.log(props)

    return(
        <header className="header">
            <div className='header-content'></div> 
            <div className='icons'>
                <i className='notification'></i>
                <i className='search'></i>
                <i className='selection buuttom'></i>
            </div>
        </header>

    );
}

export default Header