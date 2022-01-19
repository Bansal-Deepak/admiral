import Button from '../components/Button';

export default {
    title:'New Button',
    component:Button,
    argTypes:{handleClick:{action:'random'}}
    
}



// export const Red = ()=><Button label="Click Me" />
const Template=args=><Button {...args}/>
export const Red = Template.bind({});
Red.call({
    backgroundColor:'red',
    label:'Click Me',
    size:'lg'
})
export const Green = Template.bind({});
Green.args={
    backgroundColor:'green',
    label:'Click Me',
    size:'lg'
}
export const Small = Template.bind({});
Small.call({
    backgroundColor:'red',
    label:'Click Me',
    size:'sm'
})
export const Medium = Template.bind({});
Medium.call({
    backgroundColor:'red',
    label:'Click Me',
    size:'md'
})
