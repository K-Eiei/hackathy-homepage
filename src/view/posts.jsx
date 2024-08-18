import Layout from "../components/layouts/article"
import Container from "../components/container";

const PostsPage = () => {
    return (
        <Layout title={"Posts"}>
            <Container>
                <div className="w-full flex flex-col justify-center items-center">
                    <h1>Posts</h1>
                    <div className="h-[70rem]" />
                </div>
            </Container>
        </Layout>
    );
}

export default PostsPage;