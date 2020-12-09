import './Unbrewd.css';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useState } from 'react';
import React from 'react';
import api from './services/api'
//import { ListItemSecondaryAction } from '@material-ui/core';



function UnbrewdShops() {
    //const [count, setCount] = useState(21)
    const [shops, setShops] = useState([])

    api.service('shops').find({}).then(
        result => {
            //console.log(result.data)
            setShops(result.data)
            //setNews(JSON.parse(result.data))
        }
    )
    return(
        <div className="Unbrewd">
            <header className="Unbrewd-header">
                <h1>Unbrewd</h1>
                <h2>{JSON.stringify(shops)} </h2>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </header>
        </div>
    );
}

//     return (
//         <div className='App'>
//             <header className='App-header'>
//                 {news.content}
//             </header>
//         </div>
//     )
// }

function UnbrewdLogin() {
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
export default UnbrewdShops ;