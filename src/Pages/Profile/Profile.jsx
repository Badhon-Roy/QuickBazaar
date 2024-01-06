import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-center my-16">
                <div className="flex items-center gap-10">
                    <img className="w-36 h-36 rounded-full" src={user?.photoURL} alt="" />
                    <div>
                        <h2 className="text-4xl font-bold mb-4">{user?.displayName}</h2>
                        <p className="text-xl">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;