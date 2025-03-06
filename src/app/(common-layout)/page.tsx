import Brands from "@/Componant/ui/Brands";
import SecondHandMarketplace from "@/Componant/ui/Header";
import HowItWorks from "@/Componant/ui/HowItWork";
import Product from "@/Componant/ui/Product";
import NumbersTellOurStory from "@/Componant/ui/Story";

export default function Home() {
  return (
    <div className="container mx-auto">
       <SecondHandMarketplace></SecondHandMarketplace>
      <Product></Product>
       <HowItWorks></HowItWorks>
       <NumbersTellOurStory></NumbersTellOurStory>
       <Brands></Brands>
    </div>
  );
}
