import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
export const STYLE_LOGO_HEIGHT = 36;

const recorderStyles = (theme) => ({
    '@global': {
        body: {
            backgroundColor: grey[900],
            color: theme.palette.common.white
        },
    },
    root: {
        flexGrow: 1,
    },
    vnc: {
        flexGrow: 1,
    },
    urlInput: {
        flexGrow: 1,
        input: {
            color: theme.palette.common.white
        }
    },
    btnRecord: {
        color: red[600]
    }
});

export default recorderStyles;