import Layout from "../components/layouts/article"

const WallpapersPage = () => {
    return (
        <Layout title={"Wallpapers"}>
            <div className="w-screen flex flex-col justify-center items-center">
                <h1>Wallpapers</h1>
                <div className="w-1 h-[70rem] bg-cta-text" />
            </div>
        </Layout>
    );
}

export default WallpapersPage;