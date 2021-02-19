import { getSession } from "next-auth/client"
import Wrapper from "../../components/Layout/Wrapper";

export default function Dashboard({session}) {
    return (
        <Wrapper session={session}>
            <h1> Dashboard </h1>
            <p> This is the first page a logged in user is shown. This page cannot be accessed without being authenticated first. </p>
        </Wrapper>
    )
}


export async function getServerSideProps(context){
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        }
    } else {
        return {
            props: {session: session}
        }
    }
}