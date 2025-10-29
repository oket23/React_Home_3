import MainLayout from "./ui/main-layout/MainLayout.tsx";
import ProductCounter from "./components/product/product-counter/ProductCounter.tsx";
import NameForm from "./components/userNameForm/nameForm/NameForm.tsx";

function App() {

    return (
    <MainLayout>
        <h1 className="font-medium text-2xl md:text-4xl mb-10">Task-1</h1>
        <ProductCounter name={"Power Bank 10000mAh"} quantity={1} description={"Швидка зарядка, 20W, чорний"} price={899}/>

        <h1 className="font-medium text-2xl md:text-4xl mt-10 mb-10">Task-2</h1>
        <NameForm/>
    </MainLayout>

    )
}
export default App
