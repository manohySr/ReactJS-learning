import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    icon : {
        marginRight: theme.spacing(2)
    },
    button : {
        marginTop : '40px'
    },
    cardGrid : {
        padding : '20px 0'
    },
    card : {
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        marginTop : '10%'
    },
    cardMedia : {
        padding : '56%'
    },
    cardContent : {
        flexGrow : 1,
    },
    cardAction : {
        marginBottom : '5%'
        
    },
    footer : {
        marginTop : '20px',
        padding : '20px 0',
        backgroundColor : '#3f51b5',
        color : '#fff'
    }
}) )

export default useStyles;