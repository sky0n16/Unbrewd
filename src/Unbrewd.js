import './Unbrewd.css';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import React from 'react';
import api from './services/api'



function Unbrewd() {
    const [news, setNews] = useState([])
    api.service('news').find({}).then(
        result => {
            console.log(result.data)
            setNews(result.data[1])
        }
    )
    return(
        <body className="Unbrewd">
            <header className="Unbrewd-header">
                <h1>Unbrewd</h1>

                <div class="login-form">
                    <FormControl>
                        <Typography gutterBottom>
                            Username
                        </Typography>
                        <input id="username"/>
                        <Typography gutterBottom>
                            Password
                        </Typography>
                        <input id="password"/>
                        <Button size="small" variant="contained" color="secondary" onClick={() => alert({news})}>Login</Button>
                </FormControl>
                </div>
            </header>
                
        </body>
    );
}
export default Unbrewd;