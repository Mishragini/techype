import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage: React.FC = async () => {
    const session = await getServerSession();

    if (!session) {
        redirect("/auth/signin");
    }
    return (
        <div>
            <h1>Dashboard Content</h1>
            <p>This is the main content of your dashboard.</p>

        </div>
    );

};

export default DashboardPage;