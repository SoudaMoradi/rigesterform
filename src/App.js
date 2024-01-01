import {useStorage} from "./hooks/useStorage";
import Login from "./pages/auth/login";
import Home from "./pages/Home";


function App() {
    const {getUser} = useStorage();
    const user = getUser();
    console.log(user);


    return (
        <div className="h-screen w-screen">
            {
                user ? (
                    <div>
                        <Home/>
                    </div>
                ) : (
                    <Login/>

                )
            }

        </div>
    );
}
export default App;
