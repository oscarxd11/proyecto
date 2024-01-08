import React from 'react'
import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './styles.css'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState([]);



    const onAddCategory = (onNewCategory) => {
        if (categories.includes(onNewCategory)) return;
        setcategories([onNewCategory, ...categories]) 

    }
    const EliminarTodoHistorial = () => {
        setcategories([]);
    }
    const EliminarBusquedaActual = () => {   
        if (categories.length > 0) {
            const newCategories = [...categories];
            newCategories.shift();
            setcategories(newCategories);
        }
    }






    return (
        <>
            <h1>Gif Gratis</h1>
            <AddCategory onNewCategory={(valor) => onAddCategory(valor)} />

            <div className="button-container">
                <button className="custom-button" onClick={EliminarTodoHistorial}>
                    Eliminar historial completo
                </button>
                <button className="custom-button" onClick={EliminarBusquedaActual}>
                    Eliminar  búsqueda actual
                </button>
            </div>

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

            <div className="copyrigth">
                <p>&copy; Oscar Aguilar {new Date().getFullYear()}</p>
            </div>
        </>
    );
















};
