import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';




const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    const soup = menu.filter(item => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu"> </Cover>
            <SectionTitle subHeading="Don't Miss" heading="Todays Offers"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} img={dessertImg} title="Dessert"></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} img={pizzaImg} title={"Pizza"}></MenuCategory>
            {/* suop */}
            <MenuCategory items={salad} img={saladImg} title={"Salad"}></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"Salad"}></MenuCategory>


        </div>
    );
};

export default Menu;