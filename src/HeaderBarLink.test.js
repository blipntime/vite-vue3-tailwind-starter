import { shallowMount } from '@vue/test-utils';
import Home from './views/Home.vue';

describe('HeaderBarLink', () => {
    it('renders correctly', () => {

        const wrapper = shallowMount(Home, {});
        console.log("ok", shallowMount, Home, wrapper)
        // expect(wrapper.html()).toMatchInlineSnapshot(
        //     '<a href="#foo" style="color: rgb(255, 255, 255);" class="header-bar-link"></a>'
        // );
    });
});
