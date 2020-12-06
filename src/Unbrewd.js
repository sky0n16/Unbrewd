import './Unbrewd.css';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import api from './services/api'
import { LocalNotificationsPluginWeb } from '@capacitor/core';


function Unbrewd() {
    const [count, setCount] = useState(21)
    const [news, setNews] = useState([])
    const [user, setUser] = useState("bob")
    const [password, setPassword] = useState("")
    api.service('news').find({}).then(
        result => {
            console.log(result.data)
            setNews(result.data)
        }
    )
    const login = () => {
        api.service('users').find({
            query: {
                username: user,
                password
            }
        }).then(
            result => {
                //handle results
            }
        ).catch(
            error => {
                //handle errors
            }
        )
    }
    return(
        <body className="Unbrewd">
            <header className="Unbrewd-header">
                <h1>Unbrewd</h1>
            </header>
        
            <div class="card">
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Test content
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {news}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="secondary" onClick={() => {setCount(count + 1)}}>Click Me</Button>
                    </CardActions>
                </Card>
            </div>

            <div class="login-form">
                <FormControl>
                    <TextField id="usernametext" label="Username" value={user} onChange={e => {setUser(e.target.value)}}/>
                    <TextField id="passwordtext" label="Password" type="password" value={password} onChange={e => {setPassword(e.target.value)}}/> 
                    <Button size="small" variant="contained" color="secondary" onClick={() => {login()}}>Login</Button>
                </FormControl>
                <p>
                    {user}
                    {password}
                </p>
            </div>
            


                
        </body>
    );
}
export default Unbrewd;