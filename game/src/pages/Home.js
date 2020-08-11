import React, { Component } from 'react'
import styled from 'styled-components'

import Gameplay from './../images/Gameplay.PNG'

export default class Home extends Component {
    render() {
        return (
            <CSS>
                <div className="container-fluid">                    
                    <img src={Gameplay} alt="..."/>
                    <p>Coming to Android (and likely IOS) devices sometime in 2020</p>
                    <p>Join our mailing list to wishlist the game.</p>
                    <form>
                        <div className="input-group container-fluid">
                            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                            <btn className="btn btn-primary bg-primary">Join</btn>
                        </div>
                    </form>
                    <p id="notification">(You'll be notified of its release.)</p>
                </div>
            </CSS>
        )
    }
}

const CSS = styled.header` {
    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5em;
    }

    #notification {
        margin-top: -3em;
        font-size: 1em;
    }

    #email {
        border: 1px solid #ccc; 
        border-radius: 15px 0px 0px 15px;
    }

    .btn {
        border: 1px solid btn-primary; 
        border-radius: 0px 15px 15px 0px;
        margin-left: 0px;
        margin-up: -5px;
    }

    img {
        width: 50em;
        margin: 2em;
    }

    .container-fluid {
        color: var(--whites);
        text-align: center;
    }

    btn {
        margin-left: 1.2em;
        width: 4em;
    }

    form {        
        margin: 3em auto 4em auto;
    }

    .input-group {
        width: 23em;
        text-align: center;
    }
}`;