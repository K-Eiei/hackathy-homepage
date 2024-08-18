import Layout from "../components/layouts/article"
import Container from "../components/container";

const WallpapersPage = () => {
    return (
        <Layout title={"Wallpapers"}>
            <Container>
                <div className="w-full flex flex-col justify-center items-center">
                    <h1>Wallpapers</h1>
                    <div className="h-[70rem]" />
                </div>
            </Container>
        </Layout>
    );
}

export default WallpapersPage;