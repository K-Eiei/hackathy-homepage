import Layout from "../components/layouts/article"

const PostsPage = () => {
    return (
        <Layout title={"Posts"}>
            <div className="w-screen flex flex-col justify-center items-center">
                <h1>Posts</h1>
                <div className="w-1 h-[70rem] bg-cta-text" />
            </div>
        </Layout>
    );
}

export default PostsPage;