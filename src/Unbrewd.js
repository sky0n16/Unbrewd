import './Unbrewd.css';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

var insertVarName = 21;

function Unbrewd() {
    return(
        <div className="Unbrewd">
            <header className="Unbrewd-header">
                <h1>Unbrewd</h1>

                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Test content
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {insertVarName}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="secondary" onClick={() => {insertVarName++}}>Click Me</Button>
                    </CardActions>
                </Card>
            </header>
        </div>
    );
}
export default Unbrewd;