import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import React from 'react';
import Burger from './Burger';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';


configure({ adapter: new Adapter() });

describe('burger test', () => {

it('Should not render more ingredients when props.ingredients is empty', () => {
	const wrapper = shallow(<Burger />);
	wrapper.setProps({ingredients: null});
	expect(wrapper.find(BurgerIngredient)).toHaveLength(2);
});

it('Should not show information when props.ingredients is empty', () => {
	const wrapper = shallow(<Burger />);
	//wrapper.setProps({ingredients: null});
	expect(wrapper.contains(<p>Please start adding ingredients.</p>)).toEqual(true);
});

});

