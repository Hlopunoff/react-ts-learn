import { Aside } from "../components/aside/Aside";
import { CreateReport } from "../components/createReport/CreateReport";

export const MainPage: React.FC = () => {
    return (
        <main className="main" style={{display: "flex"}}>
            <Aside/>
            <section className="section" style={{ background: "#F7F8FC", width: '100%', height:"100vh", padding: "25px 15px 50px 15px"}}>
                <CreateReport/>
            </section>
        </main>
    );
};