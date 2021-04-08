import Header from "../Header"
import ProductDetail from "../ProductDetail"
import classes from "./app.module.css"

const App = props => {
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.page}>
                <nav className={classes.breadcrumbs} />
                <ProductDetail />
            </div>
        </div>
    )
}

export default App
