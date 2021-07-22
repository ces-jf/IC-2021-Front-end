import { useRouter } from 'next/router';

export default function Users() {
    const router = useRouter();
    console.log(router.query);
    return (
        <>
            <h1>hello {router.query.user}</h1>
        </>
    );
}