import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from './components/Nav'

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <article className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </article>
      <article className="padding">
        <PopularProducts />
      </article>
      <article className="padding">
        <SuperQuality />
      </article>
      <article className="padding">
        <Services />
      </article>
      <article className="padding">
        <SpecialOffer />
      </article>
      <article className="padding bg-pale-blue">
        <CustomerReviews />
      </article>
      <article className="padding-x smLpy:32 py-16 w-full">
        <Subscribe />
      </article>
      <div className="bg-black  padding-x padding-t pb-8">
        <Footer />
      </div>
    </main>
  );
};

export default App;
