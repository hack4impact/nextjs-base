import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';
import Header from "./Header";

// Use this Wrapper component for all protected routes.
export default function Wrapper({component, children}) {
    return(
        <>
        <Header/>
        <div className="container-fluid" style={{display:"flex"}}>
        <Sidebar component={component}/>
        <main className="container main-container" style={{paddingLeft: "1rem"}}>
            {children}
        </main>
        </div>
        </>
    )
}

//this doesnt seem to work
Wrapper.propTypes = {
    component: PropTypes.string.isRequired
}