import classes from "./header.module.css"

const Header = props => {
    const { children } = props

    return (
        <>
            <div className={classes.switcher} />
            <header className={classes.header} />
        </>
    )
}

export default Header
