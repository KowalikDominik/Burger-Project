import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import React from 'react';
import Burger from './Burger';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';


configure({ adapter: new Adapter() });

it('Should not render ingredients when props.ingredients is empty', () => {
	const wrapper = shallow(<Burger ingredients={[]} />);
	expect(wrapper.find(BurgerIngredient));
});

