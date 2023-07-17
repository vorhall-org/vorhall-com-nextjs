import Nav from "./nav";

const navData = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: 'about',
  },
]

export default {
  title: "Components/Nav",
  component: Nav,
};

export const NavComponent = () => <Nav items={navData} />