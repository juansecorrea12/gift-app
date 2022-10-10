import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const addCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <div className="container">
                <h1>GiftExpertApp</h1>
                <AddCategory 
                // onAddCategories={setCategories} 
                onNewCategory = {addCategory}
                />
                {
                    categories.map((category) => (
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                    ))
                }
            </div>
        </>
    )
}