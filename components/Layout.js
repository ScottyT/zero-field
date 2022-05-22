import Hero from './Hero'
const Layout = ({ children }) => {
    let heroBlok = children.props.blok.body.filter(el => el.component == 'hero')[0]
    //console.log(heroBlok)
    return (
        <>
            <Hero blok={heroBlok} />
            <main className="w-full">{children}</main>
        </>
    )
};

export default Layout;