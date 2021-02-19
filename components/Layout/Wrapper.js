import Header from "./Header";

// Use this Wrapper component for all protected routes.
export default function Wrapper({session, children}) {
    return(
        <>
        <Header session={session}/>
        <div className="container-fluid" style={{display:"flex"}}>
            <main className="container main-container" style={{paddingLeft: "1rem"}}>
                {children}
            </main>
        </div>
        </>
    )
}