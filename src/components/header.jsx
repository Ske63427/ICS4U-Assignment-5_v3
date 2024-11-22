import './header.css'

function header(){
    return(
        <div className='header'>
            <div className="logo">
                <img id="logo" src="src/321 Movies Logo.png"></img>
            </div>
            <div className="search">
                <input id="search"type="text" placeholder="Search"></input>
            </div>
            <div className="accounts">
                <a class="button" id="login" href="#">Login</a>
                <a class="button" id="register" href="#">Register</a>
            </div>
        </div>
    )
}

export default header