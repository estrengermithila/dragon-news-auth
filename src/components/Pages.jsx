import { useLoaderData } from "react-router-dom";
import Category from "./Category";


const Pages = () => {
    const {data} = useLoaderData()
    console.log(data)
    return (
        <div>
           <h2 className="font-semibold mb-3">Dragon News</h2>
           <p>{data.length} News found on this category</p>
           <div>
            {
                data.map(category => <Category category={category} key={category._id}></Category>)
            }
           </div>
        </div>
    );
};

export default Pages;