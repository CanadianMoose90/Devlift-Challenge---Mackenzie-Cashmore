import React from 'react'

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const myStyle = makeStyles((theme) => ({
    btn: {
        backgroundColor: "#e0f2f1",
        '&:hover': {
            backgroundColor: "#00bfa5"
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }
}));

export default function NoteCards({ item }) {

    const styleClass = myStyle();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card>
                <CardHeader
                    title={item.title}
                    subheader={item.sub}
                    action={
                        <IconButton>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                    }
                />
                <CardContent color="#424B54">

                </CardContent>
                <CardActions>
                    <Button className={styleClass.btn}>
                        Share
                    </Button>

                    <IconButton
                        className={clsx(styleClass.expand, {
                            [styleClass.expandOpen]: styleClass,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent color="#424B54">
                        <Typography>
                            {item.details}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}